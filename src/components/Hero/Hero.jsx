import { useState, useEffect, useRef } from 'react';
import Button from '../Buttons/Button';
import './Hero.css';

const DISPLAY_MS = 4000;
const FADE_MS = 1000;

const Hero = ({
  image,
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  fullHeight = true,
  slides,
}) => {
  const displaySlides = slides?.length > 1
    ? slides
    : [{ image, title, subtitle, ctaLabel, ctaLink }];

  const isSlideshow = displaySlides.length > 1;
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = (currentIndex) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(i => (i + 1) % displaySlides.length);
    }, DISPLAY_MS + FADE_MS);
  };

  useEffect(() => {
    if (!isSlideshow) return;
    startTimer(0);
    return () => clearInterval(timerRef.current);
  }, [isSlideshow]);

  const goTo = (i) => {
    setActive(i);
    startTimer(i);
  };

  return (
    <section className={`hero ${fullHeight ? 'hero--full' : 'hero--page'}`}>
      {/* Background images — all stacked, only active one visible */}
      {displaySlides.map((slide, i) => (
        <div
          key={i}
          className={`hero__bg${i === active ? ' hero__bg--active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== active}
        />
      ))}

      <div className="hero__overlay" />

      {/* Slide text content — only active one visible */}
      {displaySlides.map((slide, i) => (
        <div
          key={i}
          className={`hero__content${i === active ? ' hero__content--active' : ''}`}
          aria-hidden={i !== active}
        >
          {slide.title && <h1 className="hero__title">{slide.title}</h1>}
          {slide.subtitle && <p className="hero__subtitle">{slide.subtitle}</p>}
          {slide.ctaLabel && slide.ctaLink && (
            <Button variant="ghost" to={slide.ctaLink} className="hero__cta">
              {slide.ctaLabel}
            </Button>
          )}
        </div>
      ))}

    </section>
  );
};

export default Hero;
