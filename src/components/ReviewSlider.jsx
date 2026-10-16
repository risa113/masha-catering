import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const item = testimonials[current];

  return (
    <div
      className="position-relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-card">
        <div className="testimonial-quote-icon">
          <Quote size={42} />
        </div>

        <div style={{ minHeight: '130px' }} className="d-flex align-items-center justify-content-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="testimonial-text">
                “{item.review}”
              </p>
              <h5 className="testimonial-author-name">{item.name}</h5>
              <span className="testimonial-tag">{item.highlight}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="testimonial-controls">
          <button
            onClick={handlePrev}
            className="slider-arrow-btn"
            aria-label="Previous customer review"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="slider-dots">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrent(idx)}
                className={`slider-dot ${idx === current ? 'active' : ''}`}
                aria-label={`Go to review by ${t.name}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="slider-arrow-btn"
            aria-label="Next customer review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
