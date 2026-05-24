import { FiCheck, FiAlertCircle } from 'react-icons/fi';
import { Card } from '../common/Card';

export const ProjectDetail = ({ project }) => {
  return (
    <div className="space-y-8">
      <Card>
        <h3 className="text-2xl font-bold mb-4">Overview</h3>
        <p className="text-light-muted dark:text-dark-muted leading-relaxed">
          {project.fullDescription}
        </p>
      </Card>

      {project.features && project.features.length > 0 && (
        <Card>
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FiCheck className="text-accent-success mt-0.5 flex-shrink-0" size={20} />
                <span className="text-light-muted dark:text-dark-muted">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <Card>
          <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
          <ul className="space-y-3">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FiAlertCircle className="text-accent-warning mt-0.5 flex-shrink-0" size={20} />
                <span className="text-light-muted dark:text-dark-muted">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};
