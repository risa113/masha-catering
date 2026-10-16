import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, MessageCircle, Phone, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FoodCard from '../components/FoodCard';
import { menuCategories, menuItems } from '../data/menuItems';
import '../styles/menu.css';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(
    categoryParam && menuCategories.includes(categoryParam) ? categoryParam : 'All Items'
  );

  useEffect(() => {
    if (categoryParam && menuCategories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All Items') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredItems = activeCategory === 'All Items'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to request a complete custom menu consultation for our upcoming celebration.'
  )}`;

  return (
    <PageTransition>
      <div className="menu-page">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
              Culinary Selections
            </span>
            <h1 className="page-hero-title">Our Catering Menu</h1>
            <p className="page-hero-subtitle">
              Authentic dum biryanis, aromatic Arabian mandi platters, party bucket biryanis, and complete multi-course banquet feasts customized to your celebration.
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-5" style={{ background: 'var(--color-cream)' }}>
          <div className="container">
            
            {/* Transparent Pricing Disclaimer / Note */}
            <div className="menu-disclaimer-box">
              <Info className="menu-disclaimer-icon" />
              <p className="menu-disclaimer-text">
                <strong>Pricing Transparency Notice:</strong> Bucket Biryani is listed at ₹2,700 as a reference price (subject to confirmation of applicable serving size and current price). All other dishes and event packages are priced on request based on guest count, customized sides, and seasonal market rates. Click <strong>Enquire Now</strong> for an instant quote.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="menu-filter-container">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`menu-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <motion.div layout className="row g-4">
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="col-lg-4 col-md-6"
                  >
                    <FoodCard item={item} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="menu-empty-state">
                <h4>No items found in this category.</h4>
                <p>Please select another category or contact us for a customized feast menu.</p>
              </div>
            )}

            {/* Custom Menu Consultation Callout */}
            <div
              className="mt-5 p-4 p-md-5 rounded-4 text-center"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span className="luxury-subheading">Need A Custom Spread?</span>
              <h3 className="section-title mb-3" style={{ fontSize: '1.85rem' }}>
                Looking for a Tailored Wedding or Event Menu?
              </h3>
              <p
                className="section-lead mb-4"
                style={{ maxWidth: '650px', margin: '0 auto 1.5rem' }}
              >
                We gladly customize every element of your feast — from appetizers, live counters, and gravies to royal halwa and beverage stations.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-theme"
                >
                  <MessageCircle size={17} />
                  <span>Request Custom Menu on WhatsApp</span>
                </a>
                <a href={`tel:${phoneClean}`} className="btn-luxury-outline">
                  <Phone size={17} />
                  <span>Call +91 96000 82016</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
    </PageTransition>
  );
}
