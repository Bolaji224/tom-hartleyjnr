import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Sales.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const Sales = () => (
  <main>

    {/* HERO */}
    <Hero
      image={`${CDN}/2026/09/DSC03093-1-e1788451120913.jpg`}
      title="Sales"
      subtitle="Whether it is a classic car or a modern supercar that you seek, our range of stock is both extensive and diverse."
      fullHeight={true}
    />

    {/* FIRST BODY SECTION */}
    <section className="sales-body">
      <div className="sales-body__inner">
        <p>Our cars are hand-picked by us with strict criteria for quality, provenance, condition and originality. In short, the cars on offer are the best you will find anywhere on the market. Furthermore, with a long established, international network of contacts in all four corners of the globe, our ability to source a vehicle to order is second to none.</p>
        <p>We do also hold cars which do not make it onto our stock list. There are a number of reasons as to why this may happen, ranging from cars that are undergoing restoration work prior to active marketing, to cars which are simply so significant that sale transactions are concluded without the need for advertising or marketing. In short, we often have cars available that may not be seen on the website, so please contact us directly to discover more about cars that may not be listed on our stock pages or to enquire about obtaining a particular car 'to order'.</p>
      </div>
    </section>

    {/* TRIPLE IMAGES */}
    <div className="sales-triple">
      <div
        className="sales-triple__img"
        style={{ backgroundImage: `url(${CDN}/2019/06/DSC_6448-3.jpg)` }}
        role="img"
        aria-label="Tom Hartley Jnr cars on display"
      />
      <div
        className="sales-triple__img"
        style={{ backgroundImage: `url(${CDN}/2019/06/220-000_1024x768-1.jpg)` }}
        role="img"
        aria-label="Classic car collection"
      />
      <div
        className="sales-triple__img"
        style={{ backgroundImage: `url(${CDN}/2019/06/P3T8607.jpg)` }}
        role="img"
        aria-label="Performance car photography"
      />
    </div>

    {/* SECOND BODY SECTION */}
    <section className="sales-body">
      <div className="sales-body__inner">
        <p>
          <strong>Our stock is our own – commission consignments are not our core business</strong><br />
          In the vast majority of cases the cars that you see in our showroom are cars into which Tom Hartley Jnr Ltd has made a personal investment. Above all else, what this signifies is that we have complete and utter faith in the cars we offer. If we are happy to invest significant sums in securing the best cars that meet our exacting standards, we believe that they will meet the requirements of any potential client anywhere in the world.
        </p>
        <p>
          <strong>Purchase</strong><br />
          Because we choose to own our stock, Tom Hartley Jnr is in the enviable position of being able to make instant decisions on the purchase of a car you may have to sell. Whether you wish to part-exchange a vehicle against one of the beautiful cars we have in stock, or if you simply have an interesting car which you wish to sell, please do not hesitate to contact us. If your car meets our requirements, we can make the sale of your car a fast, pleasant and efficient process.
        </p>
        <p>
          <strong>Commission sales</strong><br />
          Commission sales are not core to our business but we do understand that occasionally this is an arrangement that can suit an individual with a car to sell. If this is true of your particular situation and if your car meets our criteria, please do not hesitate to contact us for a confidential discussion.
        </p>
      </div>
    </section>

    {/* TWO-COLUMN: CURRENT STOCK IMAGE + TESTIMONIALS */}
    <section className="sales-split">
      {/* Left: Current Stock */}
      <Link
        to="/current-stock"
        className="sales-split__left"
        style={{ backgroundImage: `url(${CDN}/2024/09/123-2000x1790.jpg)` }}
      >
        <div className="sales-split__left-overlay" />
        <div className="sales-split__left-inner">
          <div className="sales-split__left-top">
            <h2 className="sales-split__heading">Current Stock</h2>
            <p className="sales-split__subtext">We stock only the finest, hand-selected sports, classic and luxury cars.</p>
          </div>
          <span className="sales-split__btn">View our current stock</span>
        </div>
      </Link>

      {/* Right: Testimonials */}
      <Link to="/testimonials" className="sales-split__right">
        <div className="sales-split__right-inner">
          <h2 className="sales-split__testimonials-heading">Testimonials</h2>
          <Testimonials />
        </div>
      </Link>
    </section>

  </main>
);

export default Sales;
