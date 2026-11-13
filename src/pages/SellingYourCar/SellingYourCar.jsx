import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import './SellingYourCar.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const SellingYourCar = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    manufacturer: '', model: '', year: '', registration: '', mileage: '', comments: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.manufacturer.trim()) e.manufacturer = 'Required';
    if (!form.model.trim()) e.model = 'Required';
    if (!form.year.trim()) e.year = 'Required';
    if (!form.registration.trim()) e.registration = 'Required';
    if (!form.mileage.trim()) e.mileage = 'Required';
    if (!form.comments.trim()) e.comments = 'Required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('success');
  };

  return (
    <main>
      <Hero
        image={`${CDN}/2026/09/DSC04447-Edited-e1788515975941.jpg`}
        title="Selling Your Car"
        subtitle="At Tom Hartley Jnr we are always looking for exceptional cars that meet our demanding standards."
        fullHeight={false}
      />

      <section className="selling-text-section">
        <div className="selling-narrow-wrap">
          <p className="selling-body-text">
            We also fully understand that selling a car can be a difficult, time-consuming and, occasionally, an unpleasant process. Tom Hartley Jnr is unlike most other dealers – we have the resources and expertise necessary to make selling your car easy, fast and totally hassle-free. We pride ourselves on making instant decisions and rapid transactions, which allows customers to realise the value of their cars in the fastest possible time. Our services include:
          </p>
          <p className="selling-body-text">
            &bull;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Cash Sales</strong> – This is our preferred form of transaction. We are always interested in the outright purchase of fine sports, and classic cars. For the right cars, we will make fast decisions with speedy completion.
          </p>
          <p className="selling-body-text">
            &bull;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Commission Sales</strong> – For the right car, we will tailor a consignment agreement to show a clear incentive to achieve the most money for our principal. We treat cars on consignment exactly the same as cars we personally own, this can mean that although we take the car on consignment, we may choose not to publicly advertise it, but to sell 'under the radar'.
          </p>
          <p className="selling-body-text">
            &bull;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Part Exchange</strong> – we are always happy to consider taking your existing vehicle against the value of a car which we have in stock.
          </p>
        </div>
      </section>

      <section className="selling-enquiry">
        <div className="selling-enquiry-wrap">
          {status === 'success' ? (
            <div className="selling-success">
              <h3>Thank you for your enquiry</h3>
              <p>We have received your details and will be in touch shortly to discuss your vehicle.</p>
            </div>
          ) : (
            <>
              <h2 className="selling-enquiry-title">Selling Your Car</h2>
              <form className="selling-form-fields" onSubmit={handleSubmit} noValidate>
                <div className="sell-field">
                  <label htmlFor="sell-firstName">First Name *</label>
                  <input id="sell-firstName" name="firstName" placeholder="First Name"
                    value={form.firstName} onChange={handleChange}
                    className={errors.firstName ? 'error' : ''} />
                  {errors.firstName && <span className="sell-error">{errors.firstName}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-lastName">Last Name</label>
                  <input id="sell-lastName" name="lastName" placeholder="Last Name"
                    value={form.lastName} onChange={handleChange} />
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-email">Email Address</label>
                  <input id="sell-email" name="email" type="email" placeholder="Email Address"
                    value={form.email} onChange={handleChange}
                    className={errors.email ? 'error' : ''} />
                  {errors.email && <span className="sell-error">{errors.email}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-phone">Telephone *</label>
                  <input id="sell-phone" name="phone" type="tel" placeholder="Telephone"
                    value={form.phone} onChange={handleChange}
                    className={errors.phone ? 'error' : ''} />
                  {errors.phone && <span className="sell-error">{errors.phone}</span>}
                </div>

                <div className="sell-field sell-field--section">
                  <h3>Your Car Details:</h3>
                </div>

                <div className="sell-field">
                  <label htmlFor="sell-manufacturer">Manufacturer *</label>
                  <input id="sell-manufacturer" name="manufacturer" placeholder="Manufacturer"
                    value={form.manufacturer} onChange={handleChange}
                    className={errors.manufacturer ? 'error' : ''} />
                  {errors.manufacturer && <span className="sell-error">{errors.manufacturer}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-model">Model *</label>
                  <input id="sell-model" name="model" placeholder="Model"
                    value={form.model} onChange={handleChange}
                    className={errors.model ? 'error' : ''} />
                  {errors.model && <span className="sell-error">{errors.model}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-year">Year *</label>
                  <input id="sell-year" name="year" placeholder="Year"
                    value={form.year} onChange={handleChange}
                    className={errors.year ? 'error' : ''} />
                  {errors.year && <span className="sell-error">{errors.year}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-registration">Registration *</label>
                  <input id="sell-registration" name="registration" placeholder="Registration"
                    value={form.registration} onChange={handleChange}
                    className={errors.registration ? 'error' : ''} />
                  {errors.registration && <span className="sell-error">{errors.registration}</span>}
                </div>
                <div className="sell-field">
                  <label htmlFor="sell-mileage">Mileage *</label>
                  <input id="sell-mileage" name="mileage" placeholder="Mileage"
                    value={form.mileage} onChange={handleChange}
                    className={errors.mileage ? 'error' : ''} />
                  {errors.mileage && <span className="sell-error">{errors.mileage}</span>}
                </div>

                <div className="sell-field sell-field--section">
                  <h3>Comments:</h3>
                </div>

                <div className="sell-field sell-field--full">
                  <label htmlFor="sell-comments">Comments *</label>
                  <textarea id="sell-comments" name="comments" rows="10" placeholder=""
                    value={form.comments} onChange={handleChange}
                    className={errors.comments ? 'error' : ''} />
                  {errors.comments && <span className="sell-error">{errors.comments}</span>}
                </div>

                <div className="sell-field sell-field--submit">
                  <button type="submit" className="sell-submit-btn">Submit</button>
                </div>
              </form>
            </>
          )}
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
};

export default SellingYourCar;
