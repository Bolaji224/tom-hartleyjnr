import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { previouslySoldDetails } from '../../data/previouslySoldDetails';
import './PreviouslySoldDetail.css';

const PreviouslySoldDetail = () => {
  const { slug } = useParams();
  const vehicle = previouslySoldDetails.find(v => v.slug === slug);

  const [slideIndex, setSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);

  // Use first 10 images as slider, all as gallery
  const slides = vehicle ? vehicle.sliderImgs.slice(0, 10) : [];
  const galleryImgs = vehicle ? vehicle.galleryImgs : [];

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
      <main className="psd-not-found">
        <p>Vehicle not found.</p>
        <Link to="/previously-sold">&larr; Back to previously sold</Link>
      </main>
    );
  }

  const { title, subtitle, description, specs } = vehicle;

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <main className="psd-wrap">

      {/* Slider */}
      <div className="psd-slider">
        {slides.map((img, i) => (
          <div
            key={img}
            className={`psd-slide${i === slideIndex ? ' psd-slide--active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <Link to="/previously-sold" className="psd-back-btn">&lt; Previously sold</Link>

        {slides.length > 1 && (
          <>
            <button className="psd-arrow psd-arrow--prev" onClick={prev} aria-label="Previous image">
              <img src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/back.png" alt="" />
            </button>
            <button className="psd-arrow psd-arrow--next" onClick={next} aria-label="Next image">
              <img src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/back.png" alt="" className="psd-arrow__flip" />
            </button>
          </>
        )}

        <div className="psd-slider__header">
          <div className="psd-slider__inner">
            <h1 className="psd-title">{title}</h1>
            {subtitle && <p className="psd-subtitle">{subtitle}</p>}
            <p className="psd-sold-badge">SOLD</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="psd-spec-wrap">
        <div className="psd-narrow">
          <ul className="psd-tabs">
            <li
              className={activeTab === 'description' ? 'psd-tab psd-tab--active' : 'psd-tab'}
              onClick={() => setActiveTab('description')}
            >
              Description
            </li>
            <li
              className={activeTab === 'specification' ? 'psd-tab psd-tab--active' : 'psd-tab'}
              onClick={() => setActiveTab('specification')}
            >
              Specification
            </li>
          </ul>

          {activeTab === 'description' && (
            <div className="psd-tab-content">
              {description.length > 0
                ? description.map((para, i) => <p key={i}>{para}</p>)
                : <p>Details available on request.</p>
              }
            </div>
          )}

          {activeTab === 'specification' && (
            <div className="psd-tab-content">
              <ul className="psd-spec-list">
                {specs.mileage && <li><strong>Mileage</strong><span>{specs.mileage}</span></li>}
                {specs.body_style && <li><strong>Body Style</strong><span>{specs.body_style}</span></li>}
                {specs.transmission && <li><strong>Transmission</strong><span>{specs.transmission}</span></li>}
                {specs.engine_capacity && <li><strong>Engine Capacity</strong><span>{specs.engine_capacity}</span></li>}
                {specs.fuel && <li><strong>Fuel</strong><span>{specs.fuel}</span></li>}
                {specs.chassis_no && <li><strong>Chassis No.</strong><span>{specs.chassis_no}</span></li>}
              </ul>
            </div>
          )}

          <div className="psd-cta">
            <h2 className="psd-cta__title">Interested in a similar vehicle?</h2>
            <p className="psd-cta__text">Call us on <strong>+44 7353 851226</strong></p>
            <a href="#enquire-now" className="psd-cta__btn">Enquire</a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {galleryImgs.length > 0 && (
        <div className="psd-gallery">
          <div className="psd-gallery__inner">
            <ul className="psd-gallery__list">
              {galleryImgs.map((img, i) => (
                <li
                  key={i}
                  className="psd-gallery__item"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Enquiry form */}
      <div className="psd-enquiry" id="enquire-now">
        <div className="psd-enquiry__inner">
          <div className="psd-enquiry__col psd-enquiry__col--left">
            <h2 className="psd-enquiry__title">Enquire About a Similar Vehicle</h2>
            <p className="psd-enquiry__sub">
              Call us on <strong>+44 7353 851226</strong><br />
              or complete the form below and we'll be in touch.
            </p>
          </div>
          <div className="psd-enquiry__col psd-enquiry__col--right">
            {submitted ? (
              <p className="psd-enquiry__thanks">Thank you — we'll be in touch shortly.</p>
            ) : (
              <form className="psd-form" onSubmit={handleSubmit}>
                <div className="psd-form__row">
                  <div className="psd-form__field">
                    <label htmlFor="psd-firstName">First Name</label>
                    <input id="psd-firstName" name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="psd-form__field">
                    <label htmlFor="psd-lastName">Last Name</label>
                    <input id="psd-lastName" name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="psd-form__row">
                  <div className="psd-form__field">
                    <label htmlFor="psd-email">Email</label>
                    <input id="psd-email" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="psd-form__field">
                    <label htmlFor="psd-phone">Phone</label>
                    <input id="psd-phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="psd-form__field psd-form__field--full">
                  <label htmlFor="psd-comments">Message</label>
                  <textarea id="psd-comments" name="comments" rows="5" placeholder={`I am interested in a similar vehicle to the ${title}`} value={form.comments} onChange={handleChange} />
                </div>
                <button type="submit" className="psd-form__submit">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>

    </main>
  );
};

export default PreviouslySoldDetail;
