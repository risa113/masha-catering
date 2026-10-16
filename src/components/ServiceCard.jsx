import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="service-card"
    >
      <div className="service-card-img-wrapper">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-card-tag">{service.tag}</span>
      </div>

      <div className="service-card-body">
        <h4 className="service-card-title">{service.title}</h4>
        <p className="service-card-desc">{service.shortDesc}</p>
        
        <Link to={`/menu?category=${encodeURIComponent(service.category || 'All Items')}`} className="service-card-cta">
          <span>Explore Offerings</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
