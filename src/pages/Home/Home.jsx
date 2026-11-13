import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ImageCard from '../../components/ImageCard/ImageCard';
import FeaturedCars from '../../components/FeaturedCars/FeaturedCars';
import FeaturedSale from '../../components/FeaturedSale/FeaturedSale';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import Button from '../../components/Buttons/Button';
import './Home.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const heroSlides = [
  {
    image: `${CDN}/2024/11/group-scaled.jpg`,
    title: 'Dealing in the most significant performance and classic cars',
  },
  {
    image: `${CDN}/2025/10/Ecclestone-Collection-Images_-17-scaled.jpg`,
    title: 'Previously Sold',
    subtitle: 'Browse through some of our previously sold cars.',
    ctaLabel: 'Click here',
    ctaLink: '/previously-sold',
  },
  {
    image: `${CDN}/2019/06/THJ-McLaren-PR-03-17-004.jpg`,
    title: 'About Us',
    subtitle: 'Tom Hartley Jnr has built enviable client loyalty and a world-wide reputation upon his exceptional knowledge, impartial advice and commitment to quality in every aspect of his business.',
    ctaLabel: 'Find out more',
    ctaLink: '/about',
  },
  {
    image: `${CDN}/2025/10/Untitled-2-2.jpg`,
    title: 'Expert Advice',
    subtitle: 'The car market is a complex world in which an expert guiding hand is sometimes highly beneficial.',
    ctaLabel: 'Find out more',
    ctaLink: '/services',
  },
  {
    image: `${CDN}/2025/10/THJ-Bahrain-Drone-Images_-5.jpg`,
    title: 'Testimonials',
    subtitle: 'Please feel free to have a read of what our clients say about their experience dealing with us…',
    ctaLabel: 'Read more',
    ctaLink: '/testimonials',
  },
];

const Home = () => {
  return (
    <main className="home">

      {/* SECTION 2: HERO — 5-slide fade carousel matching THJ site */}
      <Hero slides={heroSlides} />

      {/* SECTION 3: CURRENT STOCK + SELLING YOUR CAR */}
      <section className="home__cards-section">
        <div className="home__cards-pattern" aria-hidden="true" />
        <div className="container home__cards-container">
          <div className="home__cards-grid">
            <ImageCard
              image={`${CDN}/2026/10/Homepage-Image-Left-Block-356-Speedster-2000x1545.jpg`}
              imageAlt="Current stock of classic and performance cars"
              title="Current stock"
              description="We stock only the finest, hand-selected sports, classic and luxury cars."
              ctaLabel="View stock"
              ctaLink="/current-stock"
              align="right"
            />
            <ImageCard
              image={`${CDN}/2024/09/Untitled-9-1-2000x1790.jpg`}
              imageAlt="Selling your classic or performance car"
              title="Selling your car"
              description="We are always looking for exceptional cars that meet our demanding standards."
              ctaLabel="Find out more"
              ctaLink="/selling-your-car"
              align="left"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED CARS CAROUSEL */}
      <FeaturedCars />

      {/* SECTION 5: FEATURED RECENT SALE */}
      <FeaturedSale
        image={`${CDN}/2026/10/DBR1_4-Recent-Sale.jpg`}
        imageAlt="1958 Aston Martin DBR1"
        label="Featured Recent Sale"
        title="1958 Aston Martin DBR1"
        subtitle="Chassis No. DBR1/4"
        linkTo="/previously-sold"
      />

      {/* SECTION 6: COMPANY INTRODUCTION */}
      <section className="home__intro">
        <div className="home__intro-pattern" aria-hidden="true" />
        <div className="home__intro-inner">
          <p className="home__intro-text">
            Buying fine cars should be a fun and passionate process. At Tom Hartley Jnr, we have over 25 years
            of experience dealing at the very highest end of the classic &amp; performance car market.
          </p>
          <Button variant="dark" to="/about">
            Find out more
          </Button>
        </div>
      </section>

      {/* SECTION 7: PREVIOUSLY SOLD + TESTIMONIALS */}
      <section className="home__split">
        {/* Left: Previously Sold — car image IS the background */}
        <div
          className="home__split-left"
          style={{ backgroundImage: `url(${CDN}/2025/10/previous-2000x1499.jpg)` }}
        >
          <div className="home__split-left-inner">
            <h2 className="home__split-heading home__split-heading--left">Previously Sold Cars</h2>
            <Button variant="white" to="/previously-sold" size="sm">View more</Button>
          </div>
        </div>

        {/* Right: Testimonials */}
        <div className="home__split-right">
          <div className="home__split-right-inner">
            <h2 className="home__split-heading home__split-heading--right">Testimonials</h2>
            <Testimonials showCarousel />
          </div>
        </div>
      </section>

      {/* DIVIDER STRIP */}
      <div className="home__divider-strip" aria-hidden="true" />

      {/* SECTION 8: NEWSLETTER */}
      <Newsletter />

    </main>
  );
};

export default Home;
