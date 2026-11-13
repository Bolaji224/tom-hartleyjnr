import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Contact.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
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
        image={`${CDN}/2022/04/Ferrari-275-Groups-003-scaled.jpg`}
        title="How can we help?"
        fullHeight={false}
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 className="contact-info-heading">Get In Touch</h2>
              <p className="contact-info-intro">
                We welcome enquiries from serious collectors worldwide. All enquiries
                are treated with the strictest confidence.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <Phone size={16} className="contact-detail-icon" />
                  <div>
                    <span className="contact-detail-label">Telephone</span>
                    <a href="tel:+447353851226" className="contact-detail-value">+44 7353 851226</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <Mail size={16} className="contact-detail-icon" />
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <a href="mailto:support@tom-hartleyjnr.com" className="contact-detail-value">support@tom-hartleyjnr.com</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <MapPin size={16} className="contact-detail-icon" />
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">Oxfordshire, United Kingdom</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="contact-map-placeholder">
                <span>Map placeholder – location not disclosed online</span>
              </div>
            </div>

            <div className="contact-form-wrap">
              {status === 'success' ? (
                <div className="contact-success">
                  <h3>Message Received</h3>
                  <p>Thank you for your enquiry. We will respond to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="contact-form-title">Get in touch</h3>
                  <div className="contact-form-fields">
                    <div className="contact-field">
                      <label htmlFor="contact-firstName">First Name *</label>
                      <input id="contact-firstName" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange}
                        className={errors.firstName ? 'error' : ''} />
                      {errors.firstName && <span className="contact-error">{errors.firstName}</span>}
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-lastName">Last Name</label>
                      <input id="contact-lastName" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-email">Email *</label>
                      <input id="contact-email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}
                        className={errors.email ? 'error' : ''} />
                      {errors.email && <span className="contact-error">{errors.email}</span>}
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-phone">Telephone</label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="Telephone" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="contact-field contact-field--full">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" rows="6" placeholder="Message" value={form.message} onChange={handleChange} />
                    </div>
                  </div>
                  <button type="submit" className="contact-submit">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default Contact;
