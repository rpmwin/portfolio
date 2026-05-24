import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseClasses = 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg p-6 transition-all duration-300';

  const hoverClasses = hover ? 'hover:shadow-lg hover:border-accent-primary' : '';

  const cardContent = (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};
