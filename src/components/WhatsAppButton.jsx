import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = '919600082016';
  const defaultMessage = encodeURIComponent(
    'Hello Masha Catering Services, I would like to enquire about your catering services for an upcoming event.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {hovered && (
        <span
          style={{
            background: '#202020',
            color: '#FFFFFF',
            fontSize: '0.82rem',
            fontWeight: '600',
            padding: '0.45rem 0.85rem',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
            border: '1px solid rgba(197, 155, 39, 0.4)',
            whiteSpace: 'nowrap',
            animation: 'slideLeftFadeIn 0.25s ease'
          }}
        >
          Enquire on WhatsApp
        </span>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="whatsapp-pulse-badge"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.3s ease, background-color 0.3s ease'
        }}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
