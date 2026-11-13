import { useState, useEffect } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const THJLogo = ({ fill = '#1B1B1B' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39.209"
    height="45.744"
    viewBox="0 0 39.209 45.744"
    aria-hidden="true"
  >
    <path
      d="M5.27,36.89A11.124,11.124,0,0,1,0,27.4V8.643A8.866,8.866,0,0,1,8.853,0H30.567a8.681,8.681,0,0,1,8.643,8.643V27.194a10.869,10.869,0,0,1-5.27,9.486L19.6,45.744ZM1.265,8.643V27.194a9.807,9.807,0,0,0,4.849,8.643l13.7,8.643,13.7-8.643a10.268,10.268,0,0,0,4.848-8.643V8.643a7.558,7.558,0,0,0-7.589-7.589H8.853A7.558,7.558,0,0,0,1.265,8.643ZM18.339,36.89V23.61H11.594v9.7H8.643V11.173h2.951v9.7h6.745V8.222h-9.7V5.27H30.777V8.222h-9.7V20.869h6.746v-9.7h2.951V33.306H27.826v-9.7H21.08V36.89Z"
      fill={fill}
    />
  </svg>
);

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="site-header__inner">

          {/* Left: Menu */}
          <div className="site-header__left">
            <button
              className="site-header__menu-btn"
              onClick={() => setNavOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={navOpen}
            >
              <span className="site-header__menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="site-header__menu-label">Menu</span>
            </button>
          </div>

          {/* Centre: Logo */}
          <div className="site-header__centre">
            <a href="/" className="site-header__logo" aria-label="Tom Hartley Jnr – Home">
              <div className="site-header__logo-icon">
                <THJLogo fill="#1B1B1B" />
              </div>
              <div className="site-header__logo-text">
                <span className="site-header__brand">
                  TOM HARTLEY <sup className="site-header__jnr">JNR</sup>
                </span>
                <span className="site-header__tagline">Exquisite Classic &amp; Performance Cars</span>
              </div>
            </a>
          </div>

          {/* Right: Language + Phone */}
          <div className="site-header__right">
            <button className="site-header__lang" aria-label="Select language">
              <span className="site-header__flag" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#012169"/>
                  <path d="M0 12h24M12 0v24" stroke="#fff" strokeWidth="4"/>
                  <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="2.5"/>
                  <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.5"/>
                  <path d="M0 12h24M12 0v24" stroke="#C8102E" strokeWidth="2.5"/>
                </svg>
              </span>
              <ChevronDown size={11} className="site-header__lang-arrow" />
            </button>
            <a href="tel:+447353851226" className="site-header__phone" aria-label="Call us on +44 7353 851226">
              <Phone size={13} className="site-header__phone-icon" aria-hidden="true" />
              <span>+44 7353 851226</span>
            </a>
          </div>

        </div>
      </header>

      <Navigation isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
};

export default Header;
