import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [form, setForm] = useState({ firstName: '', surname: '', email: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = true;
    if (!form.surname.trim()) e.surname = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
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
    // Integration-ready
    setStatus('success');
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <h2 className="newsletter__heading">
          Sign-up for our newsletter to hear first about our latest stock, news and more.
        </h2>

        {status === 'success' ? (
          <p className="newsletter__success">
            Thank you for signing up. We&rsquo;ll be in touch with our latest news and stock.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className={`newsletter__input ${errors.firstName ? 'newsletter__input--error' : ''}`}
              autoComplete="given-name"
              aria-label="First Name"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={form.surname}
              onChange={handleChange}
              className={`newsletter__input ${errors.surname ? 'newsletter__input--error' : ''}`}
              autoComplete="family-name"
              aria-label="Surname"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={`newsletter__input ${errors.email ? 'newsletter__input--error' : ''}`}
              autoComplete="email"
              aria-label="Email Address"
            />
            <button type="submit" className="newsletter__btn">Sign-up</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
