import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';

export default function Gallery({ limit }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Biryani', 'Mandi', 'Wedding Feast', 'Food Preparation'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  }, [displayImages.length]);

  const showNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  }, [displayImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showPrev, showNext]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedImageIndex(null);
            }}
            className={`btn btn-sm ${
              activeCategory === cat
                ? 'btn-luxury-primary'
                : 'btn-luxury-outline'
            }`}
            style={{
              padding: '0.45rem 1.15rem',
              fontSize: '0.85rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="gallery-grid"
      >
        <AnimatePresence>
          {displayImages.map((image, index) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <h5>{image.title}</h5>
                <p>{image.category} • Click to view</p>
                <div className="gallery-expand-btn">
                  <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && displayImages[selectedImageIndex] && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close-btn"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="lightbox-nav-btn lightbox-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="lightbox-nav-btn lightbox-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Preview Image */}
            <div className="lightbox-img-box">
              <img
                src={displayImages[selectedImageIndex].src}
                alt={displayImages[selectedImageIndex].title}
              />
            </div>

            {/* Caption Bar */}
            <div className="lightbox-caption-bar">
              <div>
                <h5 className="mb-1 text-white">
                  {displayImages[selectedImageIndex].title}
                </h5>
                <small style={{ color: 'var(--color-gold-light)' }}>
                  {displayImages[selectedImageIndex].caption}
                </small>
              </div>
              <span
                className="badge-gold"
                style={{ fontSize: '0.75rem' }}
              >
                {selectedImageIndex + 1} / {displayImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
