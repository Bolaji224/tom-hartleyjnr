const https = require('https');

const slugs = [
  'tom-talks-the-car-in-which-lewis-hamilton-won-his-first-two-races-tom-hartley-jnr',
  'tom-talks-our-current-stock-v5-tom-hartley-jnr',
  'tom-talks-1966-ferrari-275-gtb-competizione-tom-hartley-jnr',
  'tom-talks-aston-martin-db4gt-special-tom-hartley-jnr',
  'tom-talks-cars-with-our-good-friend-ian-poulter-thj',
  'showroom-tour-v4',
  'showroomtourv3',
  '1972-ferrari-365-gtb-4-daytona-15981',
  'ford-gt40-mk1',
  'showroom-tour',
  'previously-sold',
  'ferrari-500-superfast-6659-sf',
  'ferrari-250-testa-rossa-0704',
  'mclaren-f1-gtr-longtail',
  'ferrari-275-gtb-4-10169',
  'mclaren-p1-xp',
  'ferrari-daytona-16579',
  'ultimate-ferrari-f40-buyers-guide',
  'q-a',
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const opts = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'Referer': '',
      },
    };
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

function extractYouTubeId(html) {
  // Try iframe src
  const iframeMatch = html.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/);
  if (iframeMatch) return iframeMatch[1];
  // Try youtube-nocookie
  const noCookieMatch = html.match(/youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{11})/);
  if (noCookieMatch) return noCookieMatch[1];
  // Try youtu.be
  const shortMatch = html.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  // Try data-src
  const dataSrcMatch = html.match(/data-src="[^"]*youtube[^"]*\/([A-Za-z0-9_-]{11})/);
  if (dataSrcMatch) return dataSrcMatch[1];
  return null;
}

function extractHeroImage(html) {
  // Look for the hero/banner background image style
  const heroMatch = html.match(/class="[^"]*(?:banner|hero|page-banner)[^"]*"[^>]*style="[^"]*background[^"]*url\(([^)'"]+)/i);
  if (heroMatch) return heroMatch[1].replace(/['"]/g, '').trim();

  // Try background-image style on common classes
  const bgMatch = html.match(/style="[^"]*background(?:-image)?:\s*url\(['"]?([^'")\s]+)['"]?\)[^"]*"[^>]*class="[^"]*(?:banner|hero|page-banner|tt-)[^"]*"/i);
  if (bgMatch) return bgMatch[1];

  // Any background-image with wp-content
  const wpMatch = html.match(/background(?:-image)?:\s*url\(['"]?(https:\/\/www\.tomhartleyjnr\.com\/wp-content\/uploads\/[^'")\s]+)['"]?\)/i);
  if (wpMatch) return wpMatch[1];

  return null;
}

function extractTitle(html) {
  const h1Match = html.match(/<h1[^>]*class="[^"]*(?:page-title|entry-title|banner|hero)[^"]*"[^>]*>\s*([^<]+)\s*<\/h1>/i);
  if (h1Match) return h1Match[1].trim();
  const h1 = html.match(/<h1[^>]*>\s*([^<]+)\s*<\/h1>/i);
  if (h1) return h1[1].trim();
  return null;
}

async function main() {
  const results = [];
  for (const slug of slugs) {
    const url = `https://www.tomhartleyjnr.com/tomtalks/${slug}/`;
    console.log(`Fetching: ${url}`);
    try {
      const html = await fetchPage(url);
      const youtubeId = extractYouTubeId(html);
      const heroImage = extractHeroImage(html);
      const title = extractTitle(html);
      console.log(`  YouTube: ${youtubeId || 'NOT FOUND'}`);
      console.log(`  Hero: ${heroImage ? heroImage.substring(0, 80) : 'NOT FOUND'}`);
      results.push({ slug, youtubeId, heroImage, title });
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      results.push({ slug, youtubeId: null, heroImage: null, title: null });
    }
    // small delay
    await new Promise(r => setTimeout(r, 300));
  }

  const fs = require('fs');
  const out = `export const tomTalksDetails = ${JSON.stringify(results, null, 2)};\n`;
  const outPath = require('path').join(__dirname, '..', 'src', 'data', 'tomTalksDetails.js');
  fs.mkdirSync(require('path').dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out, 'utf8');
  console.log(`\nWritten to ${outPath}`);
}

main().catch(console.error);
