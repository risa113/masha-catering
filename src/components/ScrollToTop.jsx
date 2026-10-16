import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top instantly on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Monitor scroll position for floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTopSmooth}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '25px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'var(--color-primary-dark)',
            color: '#FFFFFF',
            border: '1.5px solid var(--color-gold)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 998,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'var(--color-primary-dark)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
