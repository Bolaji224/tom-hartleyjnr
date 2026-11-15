const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': '' } };
    https.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractListingData(html) {
  const cars = [];
  const liMatches = [...html.matchAll(/<li class="car[^"]*"[^>]*>([\s\S]+?)<\/li>/g)];
  for (const li of liMatches) {
    const block = li[1];
    const hrefM = block.match(/href="(https:\/\/www\.tomhartleyjnr\.com\/car\/previously-sold\/[^"]+)"/);
    const imgM = block.match(/data-bg="url\('([^'?]+)/);
    const titleM = block.match(/<h2[^>]*>\s*([^<]+)\s*<\/h2>/);
    const detailsM = block.match(/<p class="details">([^<]*)/);
    if (!hrefM) continue;
    const url = hrefM[1];
    const slug = url.replace(/\/$/, '').split('/').pop();
    cars.push({
      url,
      slug,
      image: imgM ? imgM[1] : '',
      title: titleM ? titleM[1].trim() : '',
      details: detailsM ? detailsM[1].trim() : '',
    });
  }
  return cars;
}

function extractDetailData(html, listItem) {
  // Slider images — first has inline style, rest have data-full-bg
  const firstImg = html.match(/class="background"[^>]*style="background-image:\s*url\('([^']+)'\)/);
  const restImgs = [...html.matchAll(/data-full-bg="([^"]+)"/g)].map(m => m[1]);
  const sliderImgs = [];
  if (firstImg) sliderImgs.push(firstImg[1]);
  restImgs.forEach(img => { if (!sliderImgs.includes(img)) sliderImgs.push(img); });

  // Title
  const titleM = html.match(/<h1[^>]*class="entry-title"[^>]*>\s*([\s\S]+?)\s*<\/h1>/);
  const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : listItem.title;

  // Subtitle
  const subM = html.match(/<p[^>]*class="sub-title"[^>]*>([\s\S]+?)<\/p>/);
  const subtitle = subM ? subM[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';

  // Description tab — id="description"
  const descTabM = html.match(/id="description"[^>]*>([\s\S]+?)<div id="specification"/);
  let description = [];
  if (descTabM) {
    const paras = [...descTabM[1].matchAll(/<p[^>]*>([\s\S]+?)<\/p>/g)];
    description = paras.map(p => p[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).filter(t => t.length > 10);
  }

  // Specification tab — id="specification"
  const specTabM = html.match(/id="specification"[^>]*>([\s\S]+?)<\/div>/);
  const specs = {};
  if (specTabM) {
    const rows = [...specTabM[1].matchAll(/<li><strong>([^<]+)<\/strong>\s*<span[^>]*>([^<]+)<\/span>/g)];
    for (const row of rows) {
      const key = row[1].trim().toLowerCase().replace(/[^a-z]+/g, '_').replace(/_+$/, '');
      specs[key] = row[2].trim();
    }
  }

  // Gallery thumbnails (768x512) from item-gallery section
  const gallerySection = html.match(/class="item-gallery[^"]*"[^>]*>([\s\S]+?)<\/div><!--/);
  const galleryImgs = gallerySection
    ? [...gallerySection[1].matchAll(/data-bg="url\(([^)?]+)/g)].map(m => m[1].trim())
    : sliderImgs.map(u => u.replace(/(\.\w+)$/, '-768x512$1'));

  return { title, subtitle, sliderImgs, galleryImgs: [...new Set(galleryImgs)], description, specs };
}

async function main() {
  console.log('Fetching previously-sold listing...');
  const listHtml = await fetchPage('https://www.tomhartleyjnr.com/previously-sold/');
  const listItems = extractListingData(listHtml);
  console.log(`Found ${listItems.length} cars in listing\n`);

  const results = [];
  for (const item of listItems) {
    console.log(`Fetching: ${item.url}`);
    try {
      const html = await fetchPage(item.url);
      const detail = extractDetailData(html, item);
      results.push({
        slug: item.slug,
        image: item.image,
        title: detail.title || item.title,
        subtitle: detail.subtitle,
        details: item.details,
        sliderImgs: detail.sliderImgs,
        galleryImgs: detail.galleryImgs,
        description: detail.description,
        specs: detail.specs,
      });
      console.log(`  Title: ${detail.title}`);
      console.log(`  Slider: ${detail.sliderImgs.length} imgs`);
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      results.push({ slug: item.slug, image: item.image, title: item.title, subtitle: '', details: item.details, sliderImgs: [], galleryImgs: [], description: [], specs: {} });
    }
    await new Promise(r => setTimeout(r, 300));
  }

  const outPath = path.join(__dirname, '..', 'src', 'data', 'previouslySoldDetails.js');
  fs.writeFileSync(outPath, `export const previouslySoldDetails = ${JSON.stringify(results, null, 2)};\n`, 'utf8');
  console.log(`\nWritten ${results.length} cars to ${outPath}`);
}

main().catch(console.error);
