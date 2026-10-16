import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Heart, ShieldCheck, CheckCircle2, Phone, MessageCircle, ArrowRight, Award, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import '../styles/about.css';

const eventTypes = [
  {
    title: 'Weddings & Receptions',
    desc: 'Grand banquet setups, traditional seating, and lavish multi-course dawat feasts tailored for hundreds or thousands of attendees.'
  },
  {
    title: 'Walima Banquets',
    desc: 'Authentic Islamic celebration meals honoring time-honored Melapalayam flavors with slow-dum cooked meat and fragrant ghee rice.'
  },
  {
    title: 'Engagement & Nikkah Ceremonies',
    desc: 'Intimate and elegant family dining experiences with personalized starters, biryani or mandi platters, and decadent desserts.'
  },
  {
    title: 'Birthday & Milestone Parties',
    desc: 'Vibrant celebration menus designed to delight guests of all ages with kid-friendly starters, main courses, and celebratory desserts.'
  },
  {
    title: 'Corporate Dinners & Seminars',
    desc: 'Organized, punctual buffet service with clean food stations and executive menus ensuring a professional impression on your clients.'
  },
  {
    title: 'Family Gatherings & Housewarmings',
    desc: 'Convenient party bucket biryanis and home delivery setups that allow you to host loved ones without cooking stress.'
  }
];

const prepSteps = [
  {
    title: 'Handpicked Whole Spices',
    desc: 'Cardamom, cinnamon bark, cloves, and star anise ground in precise proportions to create our unmistakable aroma.',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Traditional Dum Sealing',
    desc: 'Slow charcoal dum in heavy metal deghs, sealing in moisture so every meat fiber absorbs deep spice flavors.',
    img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Piping Hot & Gracious Serving',
    desc: 'Dedicated buffet staff and servers dedicated to gracious, attentive hospitality so your guests feel truly cherished.',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
  }
];

export default function About() {
  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to enquire about your catering services.'
  )}`;

  return (
    <PageTransition>
      <div className="about-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
              Melapalayam Culinary Heritage
            </span>
            <h1 className="page-hero-title">
              Our Passion Is Serving Great Food.
            </h1>
            <p className="page-hero-subtitle">
              Based in Melapalayam, Tirunelveli, Masha Catering Services is driven by an enduring passion for authentic taste, hospitality, and unforgettable feast celebrations.
            </p>
          </div>
        </section>

        {/* Business Introduction */}
        <section className="about-intro-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="about-intro-img-grid">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                    alt="Authentic Dum Biryani by Masha Catering"
                    className="about-main-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
                    alt="Authentic Mandi Rice"
                    className="about-sub-img"
                  />
                  <div className="about-badge-card">
                    <span>Authentic</span>
                    <h4>Melapalayam Taste</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <span className="luxury-subheading">Who We Are</span>
                <h2 className="section-title">Bringing Heartfelt Hospitality to Every Plate</h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                  At <strong>Masha Catering Services</strong>, we believe food is the beating heart of every celebration. Located at 7th Street, Hameempuram in Melapalayam, Tirunelveli, we are deeply rooted in our region’s renowned culinary tradition.
                </p>
                <p style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                  Whether it is our signature charcoal-dum biryani, authentic Yemeni mandi rice, or complete multi-dish wedding banquets, our food is cooked fresh from scratch using only pure, wholesome ingredients. We respect the sacred trust families place in us when hosting their cherished guests.
                </p>

                <div className="row g-3 mt-2">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle2 size={20} color="var(--color-gold)" />
                      <span className="fw-semibold">100% Halal Certified Meats</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle2 size={20} color="var(--color-gold)" />
                      <span className="fw-semibold">Authentic Wood-Dum Cooking</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle2 size={20} color="var(--color-gold)" />
                      <span className="fw-semibold">Customized Menu Options</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle2 size={20} color="var(--color-gold)" />
                      <span className="fw-semibold">Punctual Event Logistics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <Link to="/menu" className="btn-luxury-primary me-3 mb-2">
                    <span>Explore Our Menu</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${phoneClean}`} className="btn-luxury-outline mb-2">
                    <Phone size={16} />
                    <span>Call +91 96000 82016</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="pillars-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Our Commitment</span>
              <h2 className="section-title">The Four Pillars of Our Kitchen</h2>
              <p className="section-lead">
                Every dish we serve is guided by a clear philosophy: genuine taste, uncompromised safety, and gracious service.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Sparkles size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Authentic Taste</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                    Traditional recipes prepared with freshly grounded whole spices and time-honored slow-cooking methods.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Utensils size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Peak Freshness</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                    Selected grain basmati, daily fresh meats, farm-fresh vegetables, and pure ghee. No artificial shortcuts.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Strict Hygiene</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                    Sanitized kitchen gear, food-grade storage, clean uniforms, and rigorous temperature regulation.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pillar-card">
                  <div className="pillar-icon-box">
                    <Heart size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Guest Satisfaction</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                    Ensuring every host is stress-free and every invited guest leaves with a contented heart and satisfied palate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Philosophy & Personalized Menus */}
        <section className="about-intro-section" style={{ background: '#FAF7F2' }}>
          <div className="container">
            <div className="row align-items-center g-5 flex-lg-row-reverse">
              <div className="col-lg-6">
                <div className="img-zoom-container rounded-4 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Wedding banquet catering table setup"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <span className="luxury-subheading">Our Philosophy</span>
                <h2 className="section-title">Personalized Feasts Crafted For Your Guests</h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                  No two events are identical. That is why we avoid rigid, one-size-fits-all packages. When you contact Masha Catering Services, we sit down with you to understand your event timing, guest profile, favorite accompaniments, and service style.
                </p>
                <p style={{ color: 'var(--color-muted)', fontSize: '1.02rem', lineHeight: '1.75' }}>
                  From selecting between mutton and chicken dum biryanis to adding Yemeni chicken or beef mandis, live tawa counters, or royal bread halwa, our personalized menu consultations guarantee your feast reflects your family’s hospitality.
                </p>

                <div className="mt-4">
                  <Link to="/contact" className="btn-luxury-primary">
                    <span>Request Personalized Menu</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Types We Cater For */}
        <section className="events-we-cater-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
                Versatile Hospitality
              </span>
              <h2 className="section-title text-white">Events We Cater For</h2>
              <p className="section-lead" style={{ color: '#E8DEC8' }}>
                We bring organized culinary execution and delicious food to every milestone.
              </p>
            </div>

            <div className="row g-4">
              {eventTypes.map((event, idx) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="event-type-item"
                  >
                    <div className="event-type-dot">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h5 className="text-white mb-2" style={{ fontSize: '1.15rem' }}>{event.title}</h5>
                      <p className="mb-0 text-white-50" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                        {event.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Preparation & Service Section */}
        <section className="prep-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="luxury-subheading">Behind The Scenes</span>
              <h2 className="section-title">The Art of Our Preparation</h2>
              <p className="section-lead">
                Every delicious bite begins with patience, premium ingredients, and master craftsmanship.
              </p>
            </div>

            <div className="row g-4">
              {prepSteps.map((step, idx) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="prep-card">
                    <div className="prep-card-img">
                      <img src={step.img} alt={step.title} loading="lazy" />
                    </div>
                    <div className="prep-card-body">
                      <span className="badge-gold mb-2">Step 0{idx + 1}</span>
                      <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                        {step.title}
                      </h4>
                      <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct CTA */}
        <section className="final-cta-section">
          <div className="container text-center">
            <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
              Let's Discuss Your Menu
            </span>
            <h2 className="final-cta-title">Ready To Plan An Unforgettable Feast?</h2>
            <p className="final-cta-text">
              Speak with our catering specialists today. We are here to make your celebration memorable.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-luxury-gold">
                <span>Contact Us Today</span>
                <ArrowRight size={17} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-theme">
                <MessageCircle size={17} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
