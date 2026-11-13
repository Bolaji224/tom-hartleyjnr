import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';
import './News.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const newsItems = [
  {
    id: 1,
    title: 'THJ Appointed to Sell McLaren F1 Cars',
    date: '18th Oct 2026',
    slug: 'thj-appointed-to-sell-mclaren-f1-cars',
    image: `${CDN}/2026/10/Screenshot-2026-10-16-at-17.47.44-600x600.jpg`,
  },
  {
    id: 2,
    title: 'Salon Privé Concours 2026',
    date: '04th Sep 2026',
    slug: 'salon-prive-concours-2026',
    image: `${CDN}/2026/09/DSC00853-600x600.jpg`,
  },
  {
    id: 3,
    title: 'Aston Martin DBR1 | An Opportunity to Purchase',
    date: '21st Aug 2026',
    slug: 'aston-martin-dbr1-an-opportunity-to-purchase',
    image: `${CDN}/2026/08/thumbnail-600x600.jpg`,
  },
  {
    id: 4,
    title: "Pebble Beach Concours d'Elegance 2026",
    date: '16th Aug 2026',
    slug: 'pebble-beach-concours-delegance-2026',
    image: `${CDN}/2026/09/PBC26_TourRoad_270-600x600.jpg`,
  },
  {
    id: 5,
    title: "SOLD | One of the World's Most Important Cars!",
    date: '09th Aug 2026',
    slug: 'sold-one-of-the-worlds-most-important-cars',
    image: `${CDN}/2026/08/cover250tr-600x600.jpg`,
  },
  {
    id: 6,
    title: 'A New Chapter for Tom Hartley Jnr',
    date: '06th Jul 2026',
    slug: 'the-firs-is-open-a-new-chapter-for-tom-hartley-jnr',
    image: `${CDN}/2026/07/DSC01356-1-e1783337851336-600x600.jpg`,
  },
  {
    id: 7,
    title: 'A Fantastic First Quarter in 2026',
    date: '09th Apr 2026',
    slug: 'a-fantastic-first-quarter-in-2026',
    image: `${CDN}/2026/04/Screenshot-2026-04-09-at-09.41.44-600x600.jpg`,
  },
  {
    id: 8,
    title: 'Introducing Private Storage at Our New Cotswolds Headquarters',
    date: '19th Mar 2026',
    slug: 'introducing-private-storage-at-our-new-cotswolds-headquarters',
    image: `${CDN}/2026/03/cover3-600x600.png`,
  },
  {
    id: 9,
    title: "SOLD | We're Now Maserati MC12-Less",
    date: '13th Feb 2026',
    slug: 'sold-were-now-maserati-mc12-less',
    image: `${CDN}/2026/02/Maserati-MC12-Groups-005-2-600x600.jpg`,
  },
  {
    id: 10,
    title: 'A Year to Certainly Remember!',
    date: '02nd Jan 2026',
    slug: 'a-year-to-certainly-remember',
    image: `${CDN}/2026/01/THUMB-600x600.jpg`,
  },
  {
    id: 11,
    title: 'SOLD | The Most Dominant Formula 1 Car of All Time — McLaren MP4/4A-04',
    date: '09th Dec 2025',
    slug: 'sold-the-most-dominant-formula-1-car-of-all-time-mclaren-mp4-4a-04',
    image: `${CDN}/2025/12/McLaren-MP4-4-002-2-600x600.jpg`,
  },
  {
    id: 12,
    title: 'A Remarkable Season of Recognition for Tom Hartley Jnr',
    date: '04th Dec 2025',
    slug: 'a-remarkable-season-of-recognition-for-tom-hartley-jnr',
    image: `${CDN}/2025/12/Screenshot-2025-12-10-at-10.04.13-1-600x600.jpg`,
  },
  {
    id: 13,
    title: "SOLD | One of Aston Martin's Most Striking Designs Ever",
    date: '28th Nov 2025',
    slug: 'sold-one-of-aston-martins-most-striking-designs-ever',
    image: `${CDN}/2025/11/Aston-Martin-Ogle-042-1-600x600.jpg`,
  },
  {
    id: 14,
    title: "SOLD | The MC12 That Didn't Hang Around!",
    date: '13th Nov 2025',
    slug: 'sold-the-mc12-that-didnt-hang-around',
    image: `${CDN}/2025/11/Maserati-MC12-032-1-e1763027784408-600x600.jpg`,
  },
  {
    id: 15,
    title: 'New Arrival: The Best of All Generations',
    date: '16th Oct 2025',
    slug: 'new-arrival-the-best-of-all-generations',
    image: `${CDN}/2025/10/thumbnail-f1-600x600.jpg`,
  },
  {
    id: 16,
    title: 'Sale Agreed On The Mansour Ojjeh Collection!',
    date: '27th Aug 2025',
    slug: 'sale-agreed-on-the-mansour-ojjeh-collection',
    image: `${CDN}/2025/08/thumbnail-mansour-600x600.jpg`,
  },
  {
    id: 17,
    title: 'The Mansour Ojjeh Collection',
    date: '29th Jun 2025',
    slug: 'the-mansour-ojjeh-collection',
    image: `${CDN}/2025/06/mansour-thumbnail-600x600.jpg`,
  },
  {
    id: 18,
    title: "New Arrival: 'The Best of The Best'",
    date: '20th Jun 2025',
    slug: 'new-arrival-the-best-of-the-best',
    image: `${CDN}/2025/06/CURRENT-600x600.jpg`,
  },
  {
    id: 19,
    title: 'SOLD | A True Ferrari Unicorn!',
    date: '02nd Jun 2025',
    slug: 'sold-a-true-ferrari-unicorn',
    image: `${CDN}/2025/06/Ferrari-288-GTO-Evoluzione-049-1-600x600.jpg`,
  },
  {
    id: 20,
    title: 'THJ Proud to Support Ziggo Sport Tempesta Racing at Le Mans',
    date: '29th May 2025',
    slug: 'thj-proud-to-support-ziggo-sport-tempesta-racing-at-le-mans',
    image: `${CDN}/2025/05/2-1-600x600.jpg`,
  },
  {
    id: 21,
    title: 'A Best in Class Moment at Cavallino Classic',
    date: '20th May 2025',
    slug: 'a-best-in-class-moment-at-cavallino-classic',
    image: `${CDN}/2025/05/NAT1367-600x600.jpeg`,
  },
  {
    id: 22,
    title: 'Sold: The Final Right-Hand Drive SWB — The Last of Just 14 Made',
    date: '09th May 2025',
    slug: 'sold-the-final-right-hand-drive-swb',
    image: `${CDN}/2025/05/Ferrari-250-GT-059-600x600.jpeg`,
  },
  {
    id: 23,
    title: 'Sold: A Very Special McLaren F1 Joins an Exceptional Collection',
    date: '08th May 2025',
    slug: 'sold-a-very-special-mclaren-f1',
    image: `${CDN}/2025/04/6-3-600x600.jpg`,
  },
  {
    id: 24,
    title: 'New Arrival: The Original Ferrari Supercar!',
    date: '23rd Apr 2025',
    slug: 'new-arrival-the-original-ferrari-supercar',
    image: `${CDN}/2025/04/8502594803_402ac67eb5_o-1-600x544.jpg`,
  },
  {
    id: 25,
    title: 'New Arrival: A Miura with Celebrity Status',
    date: '07th Apr 2025',
    slug: 'new-arrival-a-miura-with-celebrity-status',
    image: `${CDN}/2025/04/Lamborghini-Miura-054-2-600x600.jpg`,
  },
  {
    id: 26,
    title: 'New Arrival: A Sculpture Like Ferrari Racer',
    date: '19th Mar 2025',
    slug: 'new-arrival-a-sculpture-like-ferrari-racer',
    image: `${CDN}/2025/03/NAT7882-1-600x600.jpg`,
  },
  {
    id: 27,
    title: 'New Arrival: A Car That is Certainly Worth its Weight in Gold!',
    date: '12th Mar 2025',
    slug: 'new-arrival-a-car-worth-its-weight-in-gold',
    image: `${CDN}/2025/03/Ferrari-275GTB-011-1-e1741800447979-600x600.jpg`,
  },
  {
    id: 28,
    title: 'The Sale of the Century Has Been Concluded!',
    date: '07th Mar 2025',
    slug: 'the-sale-of-the-century',
    image: `${CDN}/2025/03/Untitled-2-600x600.jpg`,
  },
  {
    id: 29,
    title: 'New Arrival: A Very Low Mileage Factory Black Porsche Carrera GT',
    date: '03rd Mar 2025',
    slug: 'new-arrival-porsche-carrera-gt',
    image: `${CDN}/2025/03/Porsche-Carrera-GT-019-600x600.jpg`,
  },
  {
    id: 30,
    title: 'The Ecclestone Grand Prix Collection',
    date: '29th Jan 2025',
    slug: 'the-ecclestone-grand-prix-collection',
    image: `${CDN}/2025/01/Screenshot-2025-01-29-at-16.20.48-600x600.jpg`,
  },
  {
    id: 31,
    title: 'The Mercedes-AMG ONE: A Formula One-Inspired Marvel',
    date: '20th Jan 2025',
    slug: 'the-mercedes-amg-one',
    image: `${CDN}/2025/01/GTOne-1-600x600.jpg`,
  },
  {
    id: 32,
    title: 'The Aston Martin Valkyrie Spider: The Ultimate Open-Top Hypercar Experience',
    date: '02nd Dec 2024',
    slug: 'the-aston-martin-valkyrie-spider',
    image: `${CDN}/2024/12/newthumb-1-600x600.png`,
  },
  {
    id: 33,
    title: "Monterey Car Week 2024: A Triumph for Our 1962 Ferrari 250 GTO",
    date: '21st Aug 2024',
    slug: 'monterey-car-week-2024',
    image: `${CDN}/2024/08/Untitled-9-600x600.jpg`,
  },
  {
    id: 34,
    title: 'An F40 from the Toto Wolff collection',
    date: '20th Jan 2023',
    slug: 'an-f40-from-the-toto-wolff-collection',
    image: `${CDN}/2023/01/NAT4671-600x600.jpg`,
  },
  {
    id: 35,
    title: 'The story of the Aston Martin DB3S Coupe',
    date: '03rd Nov 2022',
    slug: 'the-story-of-the-aston-martin-db3s-coupe',
    image: `${CDN}/2022/11/1958-April-7th-Goodwood-Sussex-Trophy-Image-1-1-e1667477700343-600x600.jpg`,
  },
  {
    id: 36,
    title: 'Hampton Court Concours D\'Elégance 2022',
    date: '19th Oct 2022',
    slug: 'hampton-court-concours-delegance-2022',
    image: `${CDN}/2022/10/DSC07828-600x600.jpg`,
  },
  {
    id: 37,
    title: 'Salon Privé Concours D\'Elégance 2022',
    date: '19th Oct 2022',
    slug: 'salon-prive-concours-delegance-2022',
    image: `${CDN}/2022/10/77-AJ0_1542-600x600.jpg`,
  },
];

const News = () => {
  return (
    <main>
      <Hero
        image="https://www.tomhartleyjnr.com/wp-content/themes/thj/assets/img/header-one.jpg"
        title="News &amp; Events"
        fullHeight={false}
      />

      <section className="news-section">
        <div className="news-wrapper">
          <ul className="news-listing">
            {newsItems.map((item) => (
              <li key={item.id} className="news-car">
                <Link to={`/news/${item.slug}`}>
                  <div className="news-thumb" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="news-content">
                    <h2 className="news-title">{item.title}</h2>
                    <p className="news-date">{item.date}</p>
                  </div>
                  <div className="news-overlay">
                    <strong>Read more</strong>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default News;
