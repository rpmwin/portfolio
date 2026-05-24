import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { allSkills } from '../../data/skills';

export const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = SiIcons[iconName];
    return Icon || SiIcons.SiCircle;
  };

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tech Stack
        </h2>
        <p className="text-center text-light-muted dark:text-dark-muted mb-12 max-w-2xl mx-auto">
          Technologies I work with to build modern, scalable applications
        </p>

        {/* Compact bento grid layout */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group flex items-center gap-2 px-4 py-2 bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-full hover:border-accent-primary transition-all cursor-default"
              >
                <Icon size={20} style={{ color: skill.color }} className="flex-shrink-0" />
                <span className="text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
