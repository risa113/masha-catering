import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle, ChevronRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to enquire about your catering services.'
  )}`;

  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          {/* Brand Info Column */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-luxury)',
                  fontWeight: '700'
                }}
              >
                M
              </div>
              <h4 className="footer-brand-title mb-0">MASHA CATERING</h4>
            </div>
            <p className="footer-brand-subtitle">Melapalayam, Tirunelveli</p>
            <p className="footer-bio">
              Crafting unforgettable culinary memories across Tirunelveli and beyond. Specialized in authentic slow-cooked dum biryani, rich Yemeni mandi, and royal wedding banquets prepared with uncompromised hygiene and passion.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-theme btn-sm"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${phoneClean}`}
                className="btn-luxury-outline btn-sm text-white"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem', borderColor: 'var(--color-gold)' }}
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <ChevronRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ChevronRight size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Our Menu
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Catering Services */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-col-title">Our Specialties</h5>
            <ul className="footer-links-list">
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Wedding Catering
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Walima Banquets
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Signature Bucket Biryani
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Arabian Mandi Specials
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <ChevronRight size={14} /> Corporate & Family Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-col-title">Get in Touch</h5>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <strong>Address:</strong>
                <p className="mb-0 text-white-50">
                  7th Street, Hameempuram, Melapalayam, Tirunelveli, Tamil Nadu 627005
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Phone:</strong>
                <p className="mb-0">
                  <a href={`tel:${phoneClean}`} className="text-white">
                    +91 96000 82016
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <div>
                <strong>Operating Hours:</strong>
                <p className="mb-0 text-white-50">
                  Open until 9 PM
                </p>
                <small style={{ fontSize: '0.72rem', color: '#D4AF37' }}>
                  * Please verify daily catering hours before booking
                </small>
              </div>
            </div>

            {/* Social media placeholders */}
            <div className="footer-social-links">
              <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#youtube" className="footer-social-icon" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} <strong>Masha Catering Services</strong>. All Rights Reserved. Melapalayam, Tirunelveli.
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>Prepared with</span>
            <Heart size={14} color="var(--color-gold)" fill="var(--color-gold)" />
            <span>for authentic celebration feasts</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
