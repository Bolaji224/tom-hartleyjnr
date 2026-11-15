import { Link } from 'react-router-dom';
import Newsletter from '../../components/Newsletter/Newsletter';
import './TomTalks.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';
const LOGO = 'https://www.tomhartleyjnr.com/wp-content/themes/thj/assets/img/tom-talks-header.png';

export const videos = [
  {
    episode: null,
    title: 'Tom Talks: The car in which Lewis Hamilton won his first two races | Tom Hartley Jnr',
    image: `${CDN}/2024/09/Untitled-2-1.jpg`,
    slug: 'tom-talks-the-car-in-which-lewis-hamilton-won-his-first-two-races-tom-hartley-jnr',
  },
  {
    episode: '#24',
    title: 'Tom Talks: Our Current Stock v5 | Tom Hartley Jnr',
    image: `${CDN}/2023/07/DSC01345-2-2000x2000.jpg`,
    slug: 'tom-talks-our-current-stock-v5-tom-hartley-jnr',
  },
  {
    episode: '#23',
    title: 'Tom Talks: 1966 Ferrari 275 GTB Competizione | Tom Hartley Jnr',
    image: `${CDN}/2023/07/THJ-275-GTB-C-4-2000x1334.jpg`,
    slug: 'tom-talks-1966-ferrari-275-gtb-competizione-tom-hartley-jnr',
  },
  {
    episode: '#22',
    title: 'Tom Talks: Aston Martin DB4GT Special | Tom Hartley Jnr',
    image: `${CDN}/2023/07/Youtube_coverimage-e1690204971162.jpg`,
    slug: 'tom-talks-aston-martin-db4gt-special-tom-hartley-jnr',
  },
  {
    episode: '#21',
    title: 'Tom Talks: Cars with our good friend Ian Poulter | THJ',
    image: `${CDN}/2023/07/Youtube_coverimage_v2.jpg`,
    slug: 'tom-talks-cars-with-our-good-friend-ian-poulter-thj',
  },
  {
    episode: '#20',
    title: 'Showroom Tour v4',
    image: `${CDN}/2023/07/thumbnail-2000x1333.jpg`,
    slug: 'showroom-tour-v4',
  },
  {
    episode: '#19',
    title: 'Showroom Tour v3',
    image: `${CDN}/2022/02/DSC09854-2000x1125.jpg`,
    slug: 'showroomtourv3',
  },
  {
    episode: '#18',
    title: '1972 Ferrari 365 GTB/4 Daytona #15981',
    image: `${CDN}/2021/03/DSC00041-2000x1333.jpg`,
    slug: '1972-ferrari-365-gtb-4-daytona-15981',
  },
  {
    episode: '#17',
    title: 'Ford GT40 Mk1 #P/1057',
    image: `${CDN}/2021/03/DSC09880-2-2000x1333.jpg`,
    slug: 'ford-gt40-mk1',
  },
  {
    episode: '#16',
    title: 'Showroom Tour',
    image: `${CDN}/2021/03/DSC07598-2000x1125.jpg`,
    slug: 'showroom-tour',
  },
  {
    episode: '#15',
    title: 'Previously Sold',
    image: `${CDN}/2021/03/DSC05515-2000x1333.jpg`,
    slug: 'previously-sold',
  },
  {
    episode: '#14',
    title: 'Ferrari 500 Superfast #6659 SF',
    image: `${CDN}/2021/03/DSC03083-2000x1333.jpg`,
    slug: 'ferrari-500-superfast-6659-sf',
  },
  {
    episode: '#13',
    title: 'Ferrari 250 Testa Rossa #0704',
    image: `${CDN}/2020/08/YouTube-Thumbnail-e1596484389334.png`,
    slug: 'ferrari-250-testa-rossa-0704',
  },
  {
    episode: '#12',
    title: 'McLaren F1 GTR Longtail',
    image: `${CDN}/2020/05/THJ-F1-GTR-YouTube-e1590576751144.png`,
    slug: 'mclaren-f1-gtr-longtail',
  },
  {
    episode: '#11',
    title: 'Ferrari 275 GTB/4 #10169',
    image: `${CDN}/2020/03/YouTube-Thumbnail-275-GTB4.png`,
    slug: 'ferrari-275-gtb-4-10169',
  },
  {
    episode: '#10',
    title: 'McLaren P1 XP',
    image: `${CDN}/2020/03/P1-Cover.jpg-e1583230281791-2000x1185.jpeg`,
    slug: 'mclaren-p1-xp',
  },
  {
    episode: '#9',
    title: 'Ferrari Daytona #16579',
    image: `${CDN}/2020/02/IMG_5674-e1582122977257-2000x1131.jpg`,
    slug: 'ferrari-daytona-16579',
  },
  {
    episode: '#8',
    title: 'The Definitive Ferrari F40 Buyers Guide',
    image: `${CDN}/2020/02/IMG_4948-2000x1333.jpg`,
    slug: 'ultimate-ferrari-f40-buyers-guide',
  },
  {
    episode: '#7',
    title: 'Q & A',
    image: `${CDN}/2020/01/Q-A-.jpg`,
    slug: 'q-a',
  },
];

const TomTalks = () => (
  <main>
    <header className="tt-header">
      <div className="tt-header__inner">
        <img src={LOGO} alt="Tom Talks" className="tt-header__logo" />
      </div>
    </header>

    <section className="tt-section">
      <div className="tt-wrapper">
        <ul className="tt-listing">
          {videos.map((video) => (
            <li key={video.slug} className="tt-item">
              <Link to={`/tomtalks/${video.slug}`}>
                <div
                  className="tt-thumb"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="tt-content">
                  {video.episode && (
                    <p className="tt-episode">EPISODE {video.episode}</p>
                  )}
                  <h2 className="tt-title">{video.title}</h2>
                </div>
                <span className="tt-overlay"><strong>Watch Now</strong></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Newsletter />
  </main>
);

export default TomTalks;
