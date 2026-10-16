import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu as MenuIcon, X, Utensils } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const phoneNumber = '+91 96000 82016';
  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to enquire about your catering services for an upcoming event.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          
          {/* Logo / Brand */}
          <Link to="/" className="brand-link">
            <div className="brand-emblem">
              <span className="brand-emblem-text">M</span>
            </div>
            <div className="brand-text-block">
              <span className="brand-name">MASHA</span>
              <span className="brand-sub">Catering Services • Melapalayam</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-lg-block">
            <ul className="navbar-nav-custom">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item-custom">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons (Call Now & WhatsApp) */}
          <div className="nav-actions">
            <a href={`tel:${phoneClean}`} className="nav-btn-call" title="Call Masha Catering Services">
              <Phone size={15} />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-whatsapp"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="d-flex flex-column gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span>{link.name}</span>
                <Utensils size={16} opacity={0.5} />
              </NavLink>
            ))}
          </div>

          <div className="mobile-cta-group">
            <a
              href={`tel:${phoneClean}`}
              className="btn-luxury-outline w-100 py-2 text-white justify-content-center"
              style={{ borderColor: 'var(--color-gold)' }}
            >
              <Phone size={16} />
              <span>Call +91 96000 82016</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-theme w-100 py-2 justify-content-center"
            >
              <MessageCircle size={16} />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
