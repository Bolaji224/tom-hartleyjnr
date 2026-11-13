import { useState, useRef, useEffect } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import { featuredCars } from '../../data/vehicles';
import './FeaturedCars.css';

const ChevronLeftIcon = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
    <path d="M9 1L1 9L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
    <path d="M1 1L9 9L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GAP = 16;

const FeaturedCars = () => {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const maxIndex = Math.max(0, featuredCars.length - visibleCount);

  useEffect(() => {
    const updateSizes = () => {
      if (!wrapRef.current) return;
      const containerWidth = wrapRef.current.offsetWidth;
      let count = 3;
      if (containerWidth < 860) count = 2;
      if (containerWidth < 540) count = 1;
      setVisibleCount(count);
      const width = (containerWidth - GAP * (count - 1)) / count;
      setCardWidth(width);
    };
    updateSizes();
    const ro = new ResizeObserver(updateSizes);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = currentIndex * (cardWidth + GAP);

  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); }
    touchStartX.current = null;
  };

  return (
    <section className="featured-cars">
      <div className="container">
        <h2 className="featured-cars__heading">Featured Cars</h2>
      </div>

      <div className="featured-cars__stage">
        <button
          className="featured-cars__nav featured-cars__nav--prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous vehicles"
        >
          <ChevronLeftIcon />
        </button>

        <div className="container featured-cars__container-inner">
          <div
            ref={wrapRef}
            className="featured-cars__track-wrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="featured-cars__track"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: `${GAP}px`,
              }}
            >
              {featuredCars.map((car) => (
                <div
                  key={car.id}
                  className="featured-cars__slide"
                  style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                >
                  <VehicleCard vehicle={car} variant="carousel" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="featured-cars__nav featured-cars__nav--next"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next vehicles"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default FeaturedCars;
