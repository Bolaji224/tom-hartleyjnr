import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="testimonials">
      <blockquote className="testimonials__quote">
        <p className="testimonials__text">&ldquo;{current.quote}&rdquo;</p>
        <footer className="testimonials__footer">
          <cite className="testimonials__name">{current.name}</cite>
          <span className="testimonials__designation">{current.designation}</span>
        </footer>
      </blockquote>
    </div>
  );
};

export default Testimonials;
