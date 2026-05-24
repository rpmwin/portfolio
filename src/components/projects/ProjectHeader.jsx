import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const ProjectHeader = ({ project }) => {
  return (
    <div className="mb-8">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors mb-6"
      >
        <FiArrowLeft />
        Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {project.title}
      </h1>
      <p className="text-xl text-accent-primary mb-4">
        {project.subtitle}
      </p>
      <p className="text-light-muted dark:text-dark-muted mb-6">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-3">
        {project.links.github && (
          <Button
            variant="secondary"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
            View Code
          </Button>
        )}
        {project.links.live && (
          <Button
            variant="primary"
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};
