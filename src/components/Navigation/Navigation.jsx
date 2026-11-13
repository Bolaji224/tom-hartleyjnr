import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import './Navigation.css';

const THJLogoWhite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39.209"
    height="45.744"
    viewBox="0 0 39.209 45.744"
    aria-hidden="true"
  >
    <path
      d="M5.27,36.89A11.124,11.124,0,0,1,0,27.4V8.643A8.866,8.866,0,0,1,8.853,0H30.567a8.681,8.681,0,0,1,8.643,8.643V27.194a10.869,10.869,0,0,1-5.27,9.486L19.6,45.744ZM1.265,8.643V27.194a9.807,9.807,0,0,0,4.849,8.643l13.7,8.643,13.7-8.643a10.268,10.268,0,0,0,4.848-8.643V8.643a7.558,7.558,0,0,0-7.589-7.589H8.853A7.558,7.558,0,0,0,1.265,8.643ZM18.339,36.89V23.61H11.594v9.7H8.643V11.173h2.951v9.7h6.745V8.222h-9.7V5.27H30.777V8.222h-9.7V20.869h6.746v-9.7h2.951V33.306H27.826v-9.7H21.08V36.89Z"
      fill="#fff"
      opacity="0.6"
    />
  </svg>
);

const col1Links = [
  { label: 'About Us', path: '/about' },
  { label: 'Sales', path: '/sales' },
  { label: 'About Tom Hartley Jnr', path: '/about-tom-hartley-jnr' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'News & Events', path: '/news' },
  { label: 'Tom Talks Videos', path: '/videos' },
];

const col2Links = [
  { label: 'Selling Your Car', path: '/selling-your-car' },
  { label: 'Our Services', path: '/services' },
  { label: 'Expert Advice', path: '/expert-advice' },
  { label: 'Finance', path: '/finance' },
  { label: 'Private Storage Facility', path: '/storage' },
  { label: 'Join the Team', path: '/careers' },
];

const Navigation = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => { onClose(); }, [location.pathname]);

  return (
    <nav
      className={`nav-menu ${isOpen ? 'nav-menu--open' : ''}`}
      aria-label="Main navigation"
      aria-hidden={!isOpen}
    >
      {/* Close — fixed to top-left of the overlay, independent of centred content */}
      <button
        className="nav-menu__close"
        onClick={onClose}
        aria-label="Close navigation"
        tabIndex={isOpen ? 0 : -1}
      >
        <X size={22} strokeWidth={2.5} />
        <span>Close</span>
      </button>

      {/* Centred content block */}
      <div className="nav-menu__inner">

        {/* Top divider */}
        <div className="nav-menu__divider" />

        {/* Columns */}
        <div className="nav-menu__columns">

          {/* Column 1: Current Stock */}
          <div className="nav-menu__col">
            <Link to="/current-stock" className="nav-menu__col-heading" tabIndex={isOpen ? 0 : -1}>
              Current Stock
            </Link>
            <ul className="nav-menu__list">
              {col1Links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="nav-menu__link" tabIndex={isOpen ? 0 : -1}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Previously Sold */}
          <div className="nav-menu__col">
            <Link to="/previously-sold" className="nav-menu__col-heading" tabIndex={isOpen ? 0 : -1}>
              Previously Sold
            </Link>
            <ul className="nav-menu__list">
              {col2Links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="nav-menu__link" tabIndex={isOpen ? 0 : -1}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="nav-menu__col">
            <span className="nav-menu__col-heading nav-menu__col-heading--static">Contact Us</span>
            <div className="nav-menu__contact">
              <a href="tel:+447353851226" className="nav-menu__contact-line" tabIndex={isOpen ? 0 : -1}>
                +44 7353 851226
              </a>
              <a href="mailto:support@tom-hartleyjnr.com" className="nav-menu__contact-line" tabIndex={isOpen ? 0 : -1}>
                support@tom-hartleyjnr.com
              </a>
            </div>
            <div className="nav-menu__follow">
              <span className="nav-menu__follow-label">Follow Us</span>
              <div className="nav-menu__social">
                <a href="#" className="nav-menu__social-link" aria-label="X (Twitter)" tabIndex={isOpen ? 0 : -1}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.252 2.25h6.937l4.26 5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="nav-menu__social-link" aria-label="Facebook" tabIndex={isOpen ? 0 : -1}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="nav-menu__social-link" aria-label="Instagram" tabIndex={isOpen ? 0 : -1}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="nav-menu__social-link" aria-label="YouTube" tabIndex={isOpen ? 0 : -1}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom logo divider */}
        <div className="nav-menu__bottom">
          <div className="nav-menu__bottom-line" />
          <div className="nav-menu__bottom-logo">
            <THJLogoWhite />
          </div>
          <div className="nav-menu__bottom-line" />
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
