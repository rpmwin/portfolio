import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import { ProjectHeader } from '../components/projects/ProjectHeader';
import { ProjectDetail } from '../components/projects/ProjectDetail';
import { TechStack } from '../components/projects/TechStack';
import { pageVariants, pageTransition } from '../utils/animations';

export const ProjectPage = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectHeader project={project} />

        <div className="space-y-12">
          <ProjectDetail project={project} />
          <TechStack tech={project.tech} />
        </div>
      </div>
    </motion.div>
  );
};
