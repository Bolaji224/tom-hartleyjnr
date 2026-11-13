import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Careers.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const Careers = () => (
  <main>
    <Hero
      image={`${CDN}/2024/10/DSC09031-1-scaled.jpg`}
      title="Join the Team"
      subtitle="At Tom Hartley Jnr we are a truly values-driven business and pride ourselves on our integrity, professionalism and collaboration, and of course our brilliant people."
      fullHeight={false}
    />

    <section className="careers-body">
      <div className="careers-body__inner">
        <p>One of our key differentiators is the quality of our people; a team with deep expertise and credibility to support our high-profile customers. We are proud to say that we are a company built on talent, creativity and entrepreneurial spirit always at the forefront of relationships and our reputation is built on our people.</p>
        <p>We have a fun and energetic working environment, but it is demanding, and performance orientated so we are looking for the best. We value intelligence, dedication, hard work, good ethics, and common sense consistently across the organisation.</p>
        <p>In short, we seek out the best and the brightest and will provide you with the opportunity to develop.</p>
        <p>If you're thinking about a career with us, then please take a look at our current opportunities below and register your interest today by sending through an updated CV and a cover letter relevant to the specific opportunity.</p>
        <h2 className="careers-vacancies-heading">Current Vacancies</h2>
        <p>We currently don't have any vacancies.</p>
        <p>We are always interested in talking with talented individuals about future roles and possibilities, so if you are interested in working with us then please send a copy of your CV to <a href="mailto:support@tom-hartleyjnr.com">support@tom-hartleyjnr.com</a></p>
      </div>
    </section>

    <div className="careers-two-blocks">
      <div className="careers-two-blocks__inner">
        <div
          className="careers-two-blocks__block"
          style={{ backgroundImage: `url(${CDN}/2021/04/Hiring3-2000x2000.png)` }}
          role="img"
          aria-label="Tom Hartley Jnr team"
        />
        <div
          className="careers-two-blocks__block"
          style={{ backgroundImage: `url(${CDN}/2021/04/Hiring5-2000x2000.png)` }}
          role="img"
          aria-label="Tom Hartley Jnr showroom"
        />
      </div>
    </div>

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

export default Careers;
