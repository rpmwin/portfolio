import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, getProjectCategories, getProjectTags } from '../../data/projects';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { fadeInUp } from '../../utils/animations';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTags, setActiveTags] = useState([]);

  const categories = getProjectCategories();
  const tags = getProjectTags();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === 'All' || project.category === activeCategory;

      const tagMatch =
        activeTags.length === 0 ||
        activeTags.some((tag) => project.tags.includes(tag));

      return categoryMatch && tagMatch;
    });
  }, [activeCategory, activeTags]);

  const handleTagToggle = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setActiveCategory('All');
    setActiveTags([]);
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-light-muted dark:text-dark-muted mb-12 max-w-2xl mx-auto">
          A showcase of my recent work in web development, AI/ML, and full-stack applications.
        </p>

        <ProjectFilter
          categories={categories}
          tags={tags}
          activeCategory={activeCategory}
          activeTags={activeTags}
          onCategoryChange={setActiveCategory}
          onTagToggle={handleTagToggle}
        />

        {(activeCategory !== 'All' || activeTags.length > 0) && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-light-muted dark:text-dark-muted">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
            <button
              onClick={handleClearFilters}
              className="text-sm text-accent-primary hover:text-accent-secondary transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-light-muted dark:text-dark-muted mb-4">
              No projects match your filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="text-accent-primary hover:text-accent-secondary transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};
