import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 16
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  out: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
