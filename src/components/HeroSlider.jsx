import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, ArrowRight, Calendar, HeartHandshake, ShieldCheck } from 'lucide-react';
import AnimatedText from './AnimatedText';

const sliderItems = [
  'Wedding & Walima Catering',
  'Authentic Biryani & Mandi',
  'Birthday & Family Celebrations',
  'Corporate Event Catering',
  'Customized Catering Menus'
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background imagery with subtle zoom and overlays */}
      <div className="hero-background-layer">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=80"
          alt="Masha Dum Biryani & Wedding Feast"
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
        <div className="hero-pattern-overlay"></div>
      </div>

      {/* Decorative ambient lighting spheres */}
      <div className="bg-ambient-glow glow-gold" style={{ top: '10%', right: '10%' }}></div>
      <div className="bg-ambient-glow glow-maroon" style={{ bottom: '5%', left: '5%' }}></div>

      {/* Floating food preview badge 1 */}
      <div className="hero-floating-element hero-floating-1 anim-float d-none d-lg-flex">
        <img
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80"
          alt="Chicken Dum Biryani"
          className="hero-floating-thumb"
        />
        <div className="hero-floating-info">
          <h6>Dum Biryani</h6>
          <span>Slow Cooked Aromatics</span>
        </div>
      </div>

      {/* Floating food preview badge 2 */}
      <div className="hero-floating-element hero-floating-2 anim-float-rev d-none d-lg-flex">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80"
          alt="Arabian Mandi Platter"
          className="hero-floating-thumb"
        />
        <div className="hero-floating-info">
          <h6>Arabian Mandi</h6>
          <span>Tender Spiced Platter</span>
        </div>
      </div>

      <div className="container hero-container">
        <div className="row align-items-center">
          <div className="col-xl-9 col-lg-10">
            
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge-pill"
            >
              <Sparkles size={16} />
              <span>Melapalayam’s Premier Food Experience</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="hero-main-headline">
              Every Celebration Deserves Exceptional Taste.
            </h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-supporting-text"
            >
              Premium Catering Services in Tirunelveli for Every Special Occasion. From royal wedding Walimas to aromatic bucket biryanis and authentic Yemeni mandis.
            </motion.p>

            {/* Animated Text Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="hero-slider-box"
            >
              <div className="hero-slider-icon">
                <Utensils size={22} />
              </div>
              <div>
                <div className="hero-slider-label">Specializing In</div>
                <div className="hero-slider-text">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ opacity: 0, y: 15, x: -10 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -15, x: 10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'inline-block' }}
                      className="gold-shimmer-text"
                    >
                      {sliderItems[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-cta-buttons"
            >
              <Link to="/menu" className="btn-luxury-primary">
                <span>Explore Our Menu</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn-luxury-outline text-white" style={{ borderColor: 'var(--color-gold)' }}>
                <Calendar size={17} />
                <span>Book Your Catering</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="d-flex flex-wrap align-items-center gap-4 mt-4 pt-3 border-top border-white-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="d-flex align-items-center gap-2 text-white-50" style={{ fontSize: '0.85rem' }}>
                <ShieldCheck size={18} color="var(--color-gold)" />
                <span className="text-white">100% Halal & Hygienic Prep</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-white-50" style={{ fontSize: '0.85rem' }}>
                <HeartHandshake size={18} color="var(--color-gold)" />
                <span className="text-white">Melapalayam Culinary Heritage</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
