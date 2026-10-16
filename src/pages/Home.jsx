import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, Heart, Award, Utensils, Leaf, Clock, UtensilsCrossed } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import FoodCard from '../components/FoodCard';
import ReviewSlider from '../components/ReviewSlider';
import Gallery from '../components/Gallery';
import PageTransition from '../components/PageTransition';
import { services, serviceAreas, whyChooseUs } from '../data/services';
import { menuItems } from '../data/menuItems';
import '../styles/home.css';

// Map icon strings to Lucide icon components
const iconMap = {
  Sparkles: Sparkles,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  UtensilsCrossed: UtensilsCrossed,
  Award: Award
};

export default function Home() {
  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to enquire about your catering services for an upcoming event.'
  )}`;

  // Filter 6 signature dishes to highlight on homepage
  const signatureDishes = menuItems.slice(0, 6);

  return (
    <PageTransition>
      <div className="home-page">
        {/* Section B: Hero Section */}
        <HeroSlider />

        {/* Section C: Services Overview */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Our Offerings</span>
              <h2 className="section-title">Royal Catering For Every Occasion</h2>
              <p className="section-lead">
                From lavish wedding walimas to intimate family celebrations and corporate banquets, our culinary masters prepare authentic feasts with unmatched tradition and care.
              </p>
            </div>

            <div className="row g-4">
              {services.map((service, index) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: Signature Food Section */}
        <section className="signature-food-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Authentic Flavors</span>
              <h2 className="section-title">Our Signature Dishes</h2>
              <p className="section-lead">
                Cooked with time-tested recipes, aged fragrant basmati rice, tender meats, and whole hand-ground spices. Taste the authentic culinary craft of Melapalayam.
              </p>
            </div>

            <div className="row g-4">
              {signatureDishes.map((item, index) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <FoodCard item={item} index={index} />
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/menu" className="btn-luxury-primary">
                <span>View Full Catering Menu</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section E: Why Choose Us */}
        <section className="why-choose-section">
          {/* Ambient Glows */}
          <div className="bg-ambient-glow glow-gold" style={{ top: '-10%', left: '-5%' }}></div>
          <div className="bg-ambient-glow glow-maroon" style={{ bottom: '-10%', right: '-5%' }}></div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="text-center mb-5">
              <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
                The Masha Standard
              </span>
              <h2 className="section-title text-white">Why Choose Masha Catering</h2>
              <p className="section-lead" style={{ color: '#E8DEC8' }}>
                We treat every event like a royal celebration in our own family, ensuring unmatched taste, meticulous hygiene, and warm hospitality.
              </p>
            </div>

            <div className="row g-4">
              {whyChooseUs.map((feature, idx) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="why-feature-card"
                    >
                      <div className="why-icon-wrap">
                        <IconComponent size={28} />
                      </div>
                      <h4 className="why-card-title">{feature.title}</h4>
                      <p className="why-card-desc">{feature.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section F: Gallery */}
        <section className="gallery-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Visual Feast</span>
              <h2 className="section-title">Our Culinary Gallery</h2>
              <p className="section-lead">
                Explore our slow-dum cooking process, grand wedding buffet setups, fragrant biryanis, and Arabian mandi platters. Click any photo for full view.
              </p>
            </div>

            <Gallery limit={6} />

            <div className="text-center mt-5">
              <Link to="/about" className="btn-luxury-outline">
                <span>Learn More About Our Craft</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section G: Customer Reviews */}
        <section className="reviews-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Word of Mouth</span>
              <h2 className="section-title">What Our Guests Say</h2>
              <p className="section-lead">
                Verified feedback from guests who celebrated with Masha Catering Services.
              </p>
            </div>

            <ReviewSlider />
          </div>
        </section>

        {/* Section H: Service Area */}
        <section className="service-area-section">
          <div className="container text-center">
            <span className="luxury-subheading">Serving Across Tamil Nadu</span>
            <h2 className="section-title">Our Catering Coverage</h2>
            <p className="section-lead">
              Headquartered in Melapalayam, Tirunelveli, we proudly travel with our culinary team and full mobile kitchen setup to cater events across Tamil Nadu.
            </p>

            <div className="area-badge-grid">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="area-badge-item">
                  <span className="area-badge-dot"></span>
                  <div>
                    <span className="area-badge-name">{area.name}</span>
                    <span className="area-badge-hint d-block">{area.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section I: Final CTA */}
        <section className="final-cta-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
                  Plan Your Celebration
                </span>
                <h2 className="final-cta-title">
                  Make Your Next Event Truly Delicious.
                </h2>
                <p className="final-cta-text">
                  Contact our catering team today to discuss your guest count, customized food menu, and event schedule. We are ready to serve with warmth and perfection.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a href={`tel:${phoneClean}`} className="btn-luxury-gold">
                    <Phone size={18} />
                    <span>Call Now: +91 96000 82016</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-theme"
                  >
                    <MessageCircle size={18} />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
