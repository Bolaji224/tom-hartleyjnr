const https = require('https');
const fs = require('fs');

const urls = [
  ['ferrari-daytona-sp3', 'https://www.tomhartleyjnr.com/car/stock/2023/ferrari/daytona-sp3/ferrari-daytona-sp3/'],
  ['ferrari-laferrari', 'https://www.tomhartleyjnr.com/car/stock/2015/ferrari/laferrari/2015-ferrari-laferrari/'],
  ['ferrari-275-gtb-long-nose-alloy', 'https://www.tomhartleyjnr.com/car/stock/1965/ferrari/275-gtb/ferrari-275-gtb-long-nose-alloy/'],
  ['lamborghini-miura-p400', 'https://www.tomhartleyjnr.com/car/stock/1967/lamborghini/miura/lamborghini-miura-p400-2/'],
  ['ferrari-365-gtb-4-daytona-8', 'https://www.tomhartleyjnr.com/car/stock/1973/ferrari/365-gtb-4-daytona/ferrari-365-gtb-4-daytona-8/'],
  ['ferrari-365-gtb-4-daytona-9', 'https://www.tomhartleyjnr.com/car/stock/1972/ferrari/365-gtb-4-daytona/ferrari-365-gtb-4-daytona-9/'],
  ['ferrari-365-gtb-4-daytona-10', 'https://www.tomhartleyjnr.com/car/stock/1973/ferrari/365-gtb-4-daytona/ferrari-365-gtb-4-daytona-10/'],
  ['ferrari-dino-246-gts-8', 'https://www.tomhartleyjnr.com/car/stock/1974/ferrari/dino-246-gts/ferrari-dino-246-gts-8/'],
  ['ferrari-250-gt-ellena', 'https://www.tomhartleyjnr.com/car/stock/1958/ferrari/250-gt-ellena/ferrari-250-gt-ellena/'],
  ['lancia-flaminia-sport-zagato', 'https://www.tomhartleyjnr.com/car/stock/1962/lancia/flaminia-sport-zagato-2-5-3c/lancia-flaminia-sport-zagato-2-5-3c-3/'],
  ['porsche-356-pre-a-speedster', 'https://www.tomhartleyjnr.com/car/stock/1955/porsche/356-pre-a-super-speedster/porsche-356-pre-a-speedster/'],
  ['lister-knobbly-continuation', 'https://www.tomhartleyjnr.com/car/stock/2020/lister/lister-lister/knobbly-continuation/lister-knobbly-continuation/'],
  ['aston-martin-db2-4', 'https://www.tomhartleyjnr.com/car/stock/1955/aston-martin/db2-4/aston-martin-db2-4/'],
  ['jaguar-e-type-series-1-3-8-fhc', 'https://www.tomhartleyjnr.com/car/stock/1962/jaguar/e-type-series-1-3-8-fhc/jaguar-e-type-series-1-3-8-fhc/'],
  ['porsche-935', 'https://www.tomhartleyjnr.com/car/stock/2020/porsche/935/porsche-935/'],
  ['porsche-718-cayman-gt4-rs-clubsport', 'https://www.tomhartleyjnr.com/car/stock/2022/porsche/718-cayman-gt4-rs-clubsport/porsche-718-cayman-gt4-rs-clubsport/'],
  ['ferrari-488-pista-spider', 'https://www.tomhartleyjnr.com/car/stock/2019/ferrari/488-pista-spider/ferrari-488-pista-spider/'],
  ['ferrari-812-gts-4', 'https://www.tomhartleyjnr.com/car/stock/2020/ferrari/812-gts/ferrari-812-gts-4/'],
  ['ferrari-f12berlinetta-70th-anniversary', 'https://www.tomhartleyjnr.com/car/stock/2017/ferrari/f12berlinetta-70th-anniversary/ferrari-f12berlinetta-70th-anniversary/'],
  ['porsche-911-gt2-997-2', 'https://www.tomhartleyjnr.com/car/stock/2008/porsche/911-gt2-997/porsche-911-gt2-997-2/'],
  ['porsche-911-gt3-touring-992-2-3', 'https://www.tomhartleyjnr.com/car/stock/2026/porsche/911-gt3-touring-992-2/porsche-911-gt3-touring-992-2-3/'],
  ['porsche-911-gt3-992-4', 'https://www.tomhartleyjnr.com/car/stock/2024/porsche/911-gt3-992/porsche-911-gt3-992-4/'],
  ['rolls-royce-spectre', 'https://www.tomhartleyjnr.com/car/stock/2023/rolls-royce/spectre/rolls-royce-spectre/'],
  ['rolls-royce-dawn-black-badge', 'https://www.tomhartleyjnr.com/car/stock/2018/rolls-royce/dawn-black-badge/rolls-royce-dawn-black-badge/'],
  ['bentley-continental-gt-speed-v8-hybrid', 'https://www.tomhartleyjnr.com/car/stock/2025/bentley/continental-gt-speed-v8-hybrid/bentley-continental-gt-speed-v8-hybrid/'],
  ['lamborghini-urus-3', 'https://www.tomhartleyjnr.com/car/stock/2022/lamborghini/urus/lamborghini-urus-3/'],
  ['ferrari-360-spider-3', 'https://www.tomhartleyjnr.com/car/stock/2003/ferrari/360-spider/ferrari-360-spider-3/'],
  ['mercedes-benz-g-450-d', 'https://www.tomhartleyjnr.com/car/stock/2024/mercedes-benz/g-450-d-amg-line-premium-plus/mercedes-benz-g-450-d-amg-line-premium-plus/'],
  ['land-rover-defender-110-10', 'https://www.tomhartleyjnr.com/car/stock/2015/land-rover/defender-110/land-rover-defender-110-10/'],
  ['aston-martin-vanquish-s-4', 'https://www.tomhartleyjnr.com/car/stock/2004/aston-martin/vanquish-s/aston-martin-vanquish-s-4/'],
  ['benz-patent-motorwagen', 'https://www.tomhartleyjnr.com/car/stock/1886/benz/patent-motorwagen/90782/'],
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function clean(s) {
  return s
    .replace(/<[^>]+>/g, '')
    .replace(/&#8211;/g, '-').replace(/&#8212;/g, '--')
    .replace(/&#8216;/g, "'").replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8243;/g, '"').replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ').replace(/&#8209;/g, '-')
    .replace(/&#160;/g, ' ').replace(/&#8230;/g, '...')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extract(slug, html) {
  const titleMatch = html.match(/<h1 class="entry-title">\s*([^<]+)/);
  const subtitleMatch = html.match(/class="sub-title"[^>]*>\s*([^<]*(?:<br[^>]*>[^<]*)?)/);
  const priceMatch = html.match(/class="item-price">([^<]+)/);

  const firstBg = html.match(/class="background" style="background-image: url\('([^']+)'\)/);
  const moreBgs = [...html.matchAll(/data-full-bg="([^"]+)"/g)].map(m => m[1]);
  const sliderImgs = firstBg ? [firstBg[1], ...moreBgs] : moreBgs;

  const galleryImgs = [...html.matchAll(/data-bg="url\(([^)]+)\)"/g)].map(m => m[1].replace(/\?123/, ''));

  const descIdx = html.indexOf('id="description" class="tab-content active">');
  let description = [];
  if (descIdx !== -1) {
    const descSection = html.substring(descIdx, descIdx + 25000);
    const endIdx = descSection.indexOf('<!-- .tab-content -->');
    const section = endIdx !== -1 ? descSection.substring(0, endIdx) : descSection.substring(0, 20000);
    const pMatches = [...section.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    description = pMatches.map(m => clean(m[1])).filter(p => p.length > 5);
  }

  const specIdx = html.indexOf('id="specification" class="tab-content"');
  let specs = {};
  if (specIdx !== -1) {
    const s = html.substring(specIdx, specIdx + 1200);
    const mileage = s.match(/<strong>Mileage<\/strong> <span class="value">([^<]+)<\/span>/);
    const body = s.match(/<strong>Body Style<\/strong> <span class="value">([^<]+)<\/span>/);
    const trans = s.match(/<strong>Transmission<\/strong> <span class="value">([^<]+)<\/span>/);
    const engine = s.match(/<strong>Engine Capacity<\/strong> <span class="value">([^<]+)<\/span>/);
    const fuel = s.match(/<strong>Fuel<\/strong> <span class="value">([^<]+)<\/span>/);
    const chassis = s.match(/<strong>Chassis No\.<\/strong> ([^<\n]+)/);
    if (mileage?.[1]) specs.mileage = mileage[1];
    if (body?.[1]) specs.bodyStyle = body[1];
    if (trans?.[1]) specs.transmission = trans[1];
    if (engine?.[1]) specs.engineCapacity = engine[1];
    if (fuel?.[1]) specs.fuel = fuel[1];
    if (chassis?.[1]) specs.chassisNo = chassis[1].trim();
  }

  const title = titleMatch?.[1]?.trim() || '';
  let subtitle = (subtitleMatch?.[1] || '')
    .replace(/<br[^>]*>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const price = priceMatch?.[1]?.trim() || 'POA';

  return { slug, title, subtitle, price, sliderImgs: sliderImgs.slice(0, 10), galleryImgs, description, specs };
}

async function run() {
  const results = await Promise.all(urls.map(([slug, url]) => fetchUrl(url).then(html => extract(slug, html))));
  const jsContent = 'export const vehicleDetails = ' + JSON.stringify(results, null, 2) + ';\n';
  fs.writeFileSync('src/data/vehicleDetails.js', jsContent);
  console.log('Done!', results.length, 'cars written');
  results.forEach(r => console.log(r.slug + ':', r.description.length, 'paragraphs,', r.galleryImgs.length, 'gallery imgs'));
}

run().catch(err => { console.error(err); process.exit(1); });
