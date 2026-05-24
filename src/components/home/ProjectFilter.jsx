import { motion } from 'framer-motion';

export const ProjectFilter = ({
  categories,
  tags,
  activeCategory,
  activeTags,
  onCategoryChange,
  onTagToggle,
}) => {
  return (
    <div className="mb-8 space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-light-muted dark:text-dark-muted uppercase tracking-wide">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-accent-primary text-white'
                  : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-light-muted dark:text-dark-muted uppercase tracking-wide">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                activeTags.includes(tag)
                  ? 'bg-accent-primary text-white border-accent-primary'
                  : 'border-light-border dark:border-dark-border hover:border-accent-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
