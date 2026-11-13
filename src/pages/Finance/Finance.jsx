import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Finance.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const Finance = () => (
  <main>
    <Hero
      image={`${CDN}/2022/05/Aston-martin-finance-picture.png`}
      title="Finance"
      fullHeight={false}
    />

    <section className="page-body">
      <div className="page-body__inner">
        <p>
          Funding the purchase of your dream car has never been easier. Finance packages and funding
          solutions are available across most types of vehicle in our stock. We have long-standing
          relationships with all of the leading finance companies and it is often possible for us to
          negotiate highly competitive quotes. Whatever your requirements, we can offer a package
          that is individually tailored to your needs and we would urge you to discuss your
          requirements with us at the earliest opportunity.
        </p>
      </div>
    </section>

    <section className="about-split">
      <Link
        to="/current-stock"
        className="about-split__left"
        style={{ backgroundImage: `url(${CDN}/2024/09/123-2000x1790.jpg)` }}
      >
        <div className="about-split__left-overlay" />
        <div className="about-split__left-inner">
          <div className="about-split__left-top">
            <h2 className="about-split__heading">Current Stock</h2>
            <p className="about-split__subtext">We stock only the finest, hand-selected sports, classic and luxury cars.</p>
          </div>
          <span className="about-split__btn">View our current stock</span>
        </div>
      </Link>
      <div className="about-split__right">
        <div className="about-split__right-inner">
          <h2 className="about-split__testimonials-heading">Testimonials</h2>
          <Testimonials />
        </div>
      </div>
    </section>

    <Newsletter />
  </main>
);

export default Finance;
