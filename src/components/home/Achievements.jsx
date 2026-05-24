import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { achievements } from '../../data/achievements';
import { sectionVariants, itemVariants } from '../../utils/animations';
import { Card } from '../common/Card';

export const Achievements = () => {
  const getIcon = (iconName) => {
    const Icon = FiIcons[iconName];
    return Icon || FiIcons.FiAward;
  };

  return (
    <section id="achievements" className="section-container bg-light-surface dark:bg-dark-surface/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => {
            const Icon = getIcon(achievement.icon);
            return (
              <motion.div key={achievement.id} variants={itemVariants}>
                <Card hover className="h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="p-4 bg-accent-primary/10 rounded-full mb-4">
                      <Icon className="text-accent-primary" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-light-muted dark:text-dark-muted mb-3 flex-1">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-light-muted dark:text-dark-muted">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
