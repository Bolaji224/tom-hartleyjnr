import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import './AboutTom.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const AboutTom = () => (
  <main>

    {/* HERO */}
    <Hero
      image={`${CDN}/2022/05/DSC06607-e1788451294609.jpg`}
      title="About Tom Hartley Jnr"
      subtitle="Remarkably, Tom has been involved in the high-end car business since he was 11 years old, working directly in the family business since that time."
      fullHeight={true}
    />

    {/* FIRST BODY SECTION */}
    <section className="abt-body">
      <div className="abt-body__inner">
        <p>This (possibly unique) aspect of Tom's life made him the focus of media attention from the earliest days of his career, with both print and broadcast media charting his professional life for more than 30 years.</p>
        <p>Inspired by his father who instilled a strong work ethic in Tom right from the earliest days, he became a full partner in the family business by the time he was 16 years old, rewarded only on the merit of the work for which he was personally responsible. His success is the result of hard work, passion, and enthusiasm, and it is through this unique upbringing and career path that Tom's place in the international motor trade was forged.</p>
      </div>
    </section>

    {/* TWO SIDE-BY-SIDE IMAGES */}
    <div className="abt-two-blocks">
      <div className="abt-two-blocks__inner">
        <div
          className="abt-two-blocks__img"
          style={{ backgroundImage: `url(${CDN}/2019/05/goodwin-1480-1024x683.jpg)` }}
          role="img"
          aria-label="Tom Hartley Jnr with classic car"
        />
        <div
          className="abt-two-blocks__img"
          style={{ backgroundImage: `url(${CDN}/2019/06/P3T8248-1024x682.jpg)` }}
          role="img"
          aria-label="Tom Hartley Jnr at a motor event"
        />
      </div>
    </div>

    {/* SECOND BODY SECTION */}
    <section className="abt-body">
      <div className="abt-body__inner">
        <p>During his illustrious career, Tom has conducted more transactions on super/hypercars than anyone else in the world. The business specialises in all significant, collectable cars, ranging from vintage to classic (with a particular specialisation in sports, racing and GT cars of 50s and 60s) right up to and including the most modern supercars and hypercars. Tom's personal passion for classic cars has allowed him to introduce a lot of new customers to the old car market in the last 10 years; many of whom trust him so implicitly that they have invested heavily through him to build fabulous, blue-chip, private collections.</p>
        <p>Tom is also a collector and enthusiast away from his day to day business activities. Although it is inevitable that business and pleasure often mix, his involvement in the collector car scene has allowed him to make many great friends, both personally and professionally. A firm believer in the concept that knowledge and passion are the two most powerful elements in business, Tom's reputation is built on a no-compromise approach to his activities and for his ability to take brave decisions where other dealers often fear to tread.</p>
      </div>
    </section>

    {/* TWO-COLUMN: CURRENT STOCK IMAGE + TESTIMONIALS */}
    <section className="abt-split">
      {/* Left: Current Stock */}
      <Link
        to="/current-stock"
        className="abt-split__left"
        style={{ backgroundImage: `url(${CDN}/2024/09/123-2000x1790.jpg)` }}
      >
        <div className="abt-split__left-overlay" />
        <div className="abt-split__left-inner">
          <div className="abt-split__left-top">
            <h2 className="abt-split__heading">Current Stock</h2>
            <p className="abt-split__subtext">We stock only the finest, hand-selected sports, classic and luxury cars.</p>
          </div>
          <span className="abt-split__btn">View our current stock</span>
        </div>
      </Link>

      {/* Right: Testimonials */}
      <Link to="/testimonials" className="abt-split__right">
        <div className="abt-split__right-inner">
          <h2 className="abt-split__testimonials-heading">Testimonials</h2>
          <Testimonials />
        </div>
      </Link>
    </section>

  </main>
);

export default AboutTom;
