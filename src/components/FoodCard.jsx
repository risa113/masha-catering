import { MessageCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FoodCard({ item, index = 0 }) {
  const phoneNumber = '919600082016';
  const enquireText = encodeURIComponent(
    `Hello Masha Catering Services, I would like to enquire about pricing and booking for "${item.name}".`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${enquireText}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="food-card"
    >
      <div className="food-card-img-box">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.popular && <span className="food-card-badge">Popular</span>}
      </div>

      <div className="food-card-body">
        <div className="food-card-header">
          <h4 className="food-card-name">{item.name}</h4>
          {item.isVerifiedPrice ? (
            <span className="food-card-price">{item.price}</span>
          ) : (
            <span className="food-card-price-contact">Contact for Price</span>
          )}
        </div>

        {item.isVerifiedPrice && item.priceNote && (
          <div className="food-card-price-note">
            <Info size={13} style={{ display: 'inline', marginRight: '4px' }} />
            {item.priceNote}
          </div>
        )}

        <p className="food-card-desc">{item.description}</p>

        <div className="mt-auto pt-2 d-flex align-items-center justify-content-between">
          <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
            Category: <strong>{item.category}</strong>
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary btn-sm"
            style={{ padding: '0.45rem 1.15rem', fontSize: '0.84rem' }}
          >
            <MessageCircle size={15} />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
