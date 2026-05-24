import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { cardHoverVariants } from '../../utils/animations';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      variants={cardHoverVariants}
      whileHover="hover"
      className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg overflow-hidden hover:border-accent-primary transition-colors"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
            {project.title}
          </h3>
          <p className="text-sm text-accent-primary mb-2">
            {project.subtitle}
          </p>
          <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        <div className="mb-4 flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-md"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs text-light-muted dark:text-dark-muted">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted dark:text-dark-muted hover:text-accent-primary transition-colors"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted dark:text-dark-muted hover:text-accent-primary transition-colors"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-secondary transition-colors font-medium"
          >
            Learn More
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
