import { motion } from 'framer-motion';
import { FiUser, FiBookOpen, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';
import { fadeInUp } from '../../utils/animations';
import { Card } from '../common/Card';

export const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-primary/10 rounded-lg">
                <FiUser className="text-accent-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-secondary/10 rounded-lg">
                <FiBookOpen className="text-accent-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="text-light-muted dark:text-dark-muted">
                  <p className="font-semibold text-light-text dark:text-dark-text">
                    {personalInfo.education.institution}
                  </p>
                  <p>{personalInfo.education.degree} - {personalInfo.education.major}</p>
                  <p className="text-sm">CGPA: {personalInfo.education.cgpa}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <FiMapPin size={14} />
                    <span>{personalInfo.education.location}</span>
                  </div>
                  <p className="text-sm mt-1">{personalInfo.education.duration}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
