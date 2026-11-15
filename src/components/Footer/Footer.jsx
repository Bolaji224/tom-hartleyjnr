import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
      opacity="0.5"
    />
  </svg>
);

const Footer = () => {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBack(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__inner">

          {/* Accreditation logos */}
          <div className="site-footer__accreditations">
            <img
              src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/queens.svg"
              alt="King's Award for Enterprise"
              className="site-footer__accred-img"
              loading="lazy"
            />
            <img
              src="https://www.tomhartleyjnr.com/wp-content/themes/thj/images/the-chartered-insitute-of-logistics-and-transport.svg"
              alt="The Chartered Institute of Logistics and Transport"
              className="site-footer__accred-img site-footer__accred-img--cilt"
              loading="lazy"
            />
          </div>

          {/* Logo */}
          <div className="site-footer__logo-wrap">
            <THJLogoWhite />
          </div>

          {/* Tagline */}
          <p className="site-footer__tagline">EXQUISITE CLASSIC &amp; PERFORMANCE CARS</p>

          {/* Social icons */}
          <div className="site-footer__social">
            <a href="#" className="site-footer__social-link" aria-label="X (Twitter)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.252 2.25h6.937l4.26 5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@tom.hartley42" target="_blank" rel="noopener noreferrer" className="site-footer__social-link" aria-label="TikTok">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.17 1.32.69 2.65 1.63 3.56 1.3 1.26 3.14 1.84 4.94 1.98v3.84c-1.69-.06-3.37-.49-4.84-1.28-.69-.38-1.32-.83-1.86-1.37-.01 3.44.01 6.88-.02 10.32-.07 1.59-.62 3.17-1.57 4.47-1.52 2.07-3.98 3.33-6.49 3.35-1.59.07-3.19-.45-4.52-1.4-2.3-1.58-3.74-4.27-3.6-7.03.1-2.48 1.28-4.86 3.17-6.46 1.56-1.35 3.59-2.08 5.63-2.04.03 1.42-.03 2.84-.03 4.26-1.02-.29-2.14-.25-3.1.21-1.42.68-2.42 2.09-2.57 3.68-.27 1.98.84 4.03 2.66 4.9 1.08.57 2.33.73 3.52.49 1.13-.22 2.17-.88 2.93-1.78.47-.58.84-1.26 1.03-1.98.11-.62.08-1.26.08-1.9V.01l3.95.01z"/></svg>
            </a>
          </div>

          {/* Legal */}
          <div className="site-footer__legal">
            <span className="site-footer__copyright">
              &copy; Tom Hartley Jnr {new Date().getFullYear()}. All rights reserved.
            </span>
            <span className="site-footer__sep" aria-hidden="true">|</span>
            <div className="site-footer__links">
              <Link to="/privacy" className="site-footer__link">Privacy Notice</Link>
              <span className="site-footer__sep" aria-hidden="true">|</span>
              <Link to="/terms" className="site-footer__link">Terms</Link>
              <span className="site-footer__sep" aria-hidden="true">|</span>
              <Link to="/modern-slavery" className="site-footer__link">Modern Slavery Statement</Link>
              <span className="site-footer__sep" aria-hidden="true">|</span>
              <Link to="/youtube-disclaimer" className="site-footer__link">Youtube Video Disclaimer</Link>
              <span className="site-footer__sep" aria-hidden="true">|</span>
              <span className="site-footer__link site-footer__link--credit">Site by Alt</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Back to top — fixed bottom-right */}
      <button
        className={`back-to-top ${showBack ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span>Back to top</span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M5.5 9V2M2 5.5L5.5 2L9 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
};

export default Footer;
