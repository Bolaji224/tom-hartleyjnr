import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicleDetails } from '../../data/vehicleDetails';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const { slug } = useParams();
  const vehicle = vehicleDetails.find(v => v.slug === slug);

  const [slideIndex, setSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);

  const slides = vehicle?.sliderImgs || [];

  const prev = useCallback(() => setSlideIndex(i => (i - 1 + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => setSlideIndex(i => (i + 1) % slides.length), [slides.length]);

  useEffect(() => {
    setSlideIndex(0);
    setActiveTab('description');
  }, [slug]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (!vehicle) {
    return (
      <main className="vd-not-found">
        <p>Vehicle not found.</p>
        <Link to="/current-stock">&larr; Back to current stock</Link>
      </main>
    );
  }

  const { title, subtitle, price, galleryImgs, description, specs } = vehicle;

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <main className="vd-wrap">

      {/* ── Hero slider ── */}
      <div className="vd-slider">
        {slides.map((img, i) => (
          <div
            key={img}
            className={`vd-slide${i === slideIndex ? ' vd-slide--active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <Link to="/current-stock" className="vd-back-btn">&lt; Current stock</Link>

        {slides.length > 1 && (
          <>
            <button className="vd-arrow vd-arrow--prev" onClick={prev} aria-label="Previous image">
              <img src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/back.png" alt="" />
            </button>
            <button className="vd-arrow vd-arrow--next" onClick={next} aria-label="Next image">
              <img src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/back.png" alt="" className="vd-arrow__flip" />
            </button>
          </>
        )}

        <div className="vd-slider__header">
          <div className="vd-slider__inner">
            <h1 className="vd-title">{title}</h1>
            {subtitle && <p className="vd-subtitle">{subtitle}</p>}
            {price && <p className="vd-price">{price}</p>}
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="vd-spec-wrap">
        <div className="vd-narrow">
          <ul className="vd-tabs">
            <li
              className={activeTab === 'description' ? 'vd-tab vd-tab--active' : 'vd-tab'}
              onClick={() => setActiveTab('description')}
            >
              Description
            </li>
            <li
              className={activeTab === 'specification' ? 'vd-tab vd-tab--active' : 'vd-tab'}
              onClick={() => setActiveTab('specification')}
            >
              Specification
            </li>
          </ul>

          {activeTab === 'description' && (
            <div className="vd-tab-content" id="description">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {activeTab === 'specification' && (
            <div className="vd-tab-content" id="specification">
              <ul className="vd-spec-list">
                {specs.mileage && <li><strong>Mileage</strong><span>{specs.mileage}</span></li>}
                {specs.bodyStyle && <li><strong>Body Style</strong><span>{specs.bodyStyle}</span></li>}
                {specs.transmission && <li><strong>Transmission</strong><span>{specs.transmission}</span></li>}
                {specs.engineCapacity && <li><strong>Engine Capacity</strong><span>{specs.engineCapacity}</span></li>}
                {specs.fuel && <li><strong>Fuel</strong><span>{specs.fuel}</span></li>}
                {specs.chassisNo && <li><strong>Chassis No.</strong><span>{specs.chassisNo}</span></li>}
              </ul>
            </div>
          )}

          <div className="vd-cta">
            <h2 className="vd-cta__title">Interested in this vehicle?</h2>
            <p className="vd-cta__text">Call us on <strong>+44 7353 851226</strong></p>
            <a href="#enquire-now" className="vd-cta__btn">Enquire</a>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      {galleryImgs.length > 0 && (
        <div className="vd-gallery">
          <div className="vd-gallery__inner">
            <ul className="vd-gallery__list">
              {galleryImgs.map((img, i) => (
                <li
                  key={i}
                  className="vd-gallery__item"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Enquiry form ── */}
      <div className="vd-enquiry" id="enquire-now">
        <div className="vd-enquiry__inner">
          <div className="vd-enquiry__col vd-enquiry__col--left">
            <h2 className="vd-enquiry__title">Enquire About This Vehicle</h2>
            <p className="vd-enquiry__sub">
              Call us on <strong>+44 7353 851226</strong><br />
              or complete the form below and we'll be in touch.
            </p>
          </div>
          <div className="vd-enquiry__col vd-enquiry__col--right">
            {submitted ? (
              <p className="vd-enquiry__thanks">Thank you — we'll be in touch shortly.</p>
            ) : (
              <form className="vd-form" onSubmit={handleSubmit}>
                <div className="vd-form__row">
                  <div className="vd-form__field">
                    <label htmlFor="vd-firstName">First Name</label>
                    <input id="vd-firstName" name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="vd-form__field">
                    <label htmlFor="vd-lastName">Last Name</label>
                    <input id="vd-lastName" name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="vd-form__row">
                  <div className="vd-form__field">
                    <label htmlFor="vd-email">Email</label>
                    <input id="vd-email" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="vd-form__field">
                    <label htmlFor="vd-phone">Phone</label>
                    <input id="vd-phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="vd-form__field vd-form__field--full">
                  <label htmlFor="vd-comments">Message</label>
                  <textarea id="vd-comments" name="comments" rows="5" placeholder={`I am interested in the ${title}`} value={form.comments} onChange={handleChange} />
                </div>
                <button type="submit" className="vd-form__submit">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>

    </main>
  );
};

export default VehicleDetails;
