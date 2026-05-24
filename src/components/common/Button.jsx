import { motion } from 'framer-motion';
import { buttonHoverVariants } from '../../utils/animations';

export const Button = ({ children, variant = 'primary', onClick, href, download, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-accent-primary text-white hover:bg-blue-600',
    secondary: 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary',
    outline: 'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      variants={buttonHoverVariants}
      whileHover="hover"
      whileTap="tap"
      className="inline-block"
    >
      <Component
        href={href}
        download={download}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
};
