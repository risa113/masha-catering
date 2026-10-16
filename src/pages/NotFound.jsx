import { Link } from 'react-router-dom';
import { Home, Utensils, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 20px 80px',
          background: 'var(--color-cream)',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '580px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--color-gold-soft)',
              border: '2px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'var(--color-primary)'
            }}
          >
            <Utensils size={36} />
          </div>

          <span className="luxury-subheading">Page Not Found</span>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem'
            }}
          >
            404
          </h1>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '1.05rem',
              marginBottom: '2rem'
            }}
          >
            The celebration page you are looking for has been moved or does not exist. Let's guide you back to our authentic culinary delights.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/" className="btn-luxury-primary">
              <Home size={17} />
              <span>Return To Home</span>
            </Link>
            <Link to="/menu" className="btn-luxury-outline">
              <ArrowLeft size={17} />
              <span>Explore Our Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
