import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";
import { experience } from "../../data/experience";
import { Card } from "../common/Card";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="section-container bg-light-surface/30 dark:bg-dark-surface/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work Experience
        </h2>
        <p className="text-center text-light-muted dark:text-dark-muted mb-16 max-w-2xl mx-auto">
          Building and scaling cloud infrastructure and DevOps pipelines
        </p>

        <div className="max-w-5xl mx-auto relative">
          {/* Center vertical pole/line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-success hidden lg:block" />

          <div className="space-y-8 lg:space-y-6">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot on pole */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-accent-primary border-4 border-light-bg dark:border-dark-bg z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    />
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute w-8 h-8 rounded-full bg-accent-primary/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`lg:w-[calc(50%-3rem)] ${
                      isLeft ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                    }`}
                  >
                    <Card hover>
                      <div className="flex flex-col gap-4">
                        {/* Header with icon */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-accent-primary/10 rounded-lg">
                            <FiBriefcase
                              className="text-accent-primary"
                              size={24}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <div>
                                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                                  {exp.role}
                                </h3>
                                <p className="text-accent-primary font-medium">
                                  {exp.company}
                                </p>
                              </div>
                              <span className="text-sm px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full font-medium">
                                {exp.type}
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-light-muted dark:text-dark-muted mb-4">
                              <div className="flex items-center gap-1">
                                <FiCalendar size={14} />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FiMapPin size={14} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-light-text dark:text-dark-text">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-muted"
                              >
                                <FiCheck
                                  className="text-accent-success mt-0.5 flex-shrink-0"
                                  size={16}
                                />
                                <span>{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-light-text dark:text-dark-text">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.03 }}
                                className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-full hover:border-accent-primary transition-colors"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Arrow pointing to pole (desktop only) */}
                    <div
                      className={`hidden lg:block absolute top-8 ${
                        isLeft
                          ? "right-0 translate-x-full"
                          : "left-0 -translate-x-full"
                      }`}
                    >
                      <div
                        className={`w-8 h-0.5 bg-gradient-to-${
                          isLeft ? "r" : "l"
                        } from-accent-primary/50 to-transparent`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 items-center justify-center mt-8"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary border-4 border-light-bg dark:border-dark-bg" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
