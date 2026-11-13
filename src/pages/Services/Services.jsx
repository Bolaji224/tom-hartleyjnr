import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Services.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const Services = () => (
  <main>
    <Hero
      image={`${CDN}/2019/06/EDIT_G5.jpg`}
      title="Our Services"
      subtitle="Tom Hartley Jnr has a lifetime of passion, knowledge and expertise invested in the classic car market."
      fullHeight={false}
    />

    <section className="page-body">
      <div className="page-body__inner">
        <p>
          The company's ability to source the finest cars from anywhere in the world is unrivalled,
          making the quality of the stock truly unbeatable for anybody seeking an investment grade
          classic car. Nearly all of the stock offered by Tom Hartley Jnr is owned by the business,
          thus ensuring total quality control, faultless vehicle presentation, exceptional service
          and seamless transactions.
        </p>
        <p>
          Occasionally, in certain circumstances, the business will conduct commission sales. If you
          have a car to sell and this is your preferred route to market,{' '}
          <Link to="/selling-your-car">please contact us and we can discuss your requirements</Link>.
        </p>
        <p>
          <strong>Help &amp; Advice</strong><br />
          We pride ourselves in the help and advice that we are freely able to offer anybody wishing
          to learn more about the classic car market and how to purchase the right vehicle.{' '}
          <Link to="/our-services/expert-advice">Click 'here' to visit our expert advice page</Link>.
        </p>
        <p>
          <strong>Finance</strong><br />
          Many of the classic cars on offer can be purchased using a variety of funding options.{' '}
          <Link to="/contact">Click here to contact us</Link>.
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

export default Services;
