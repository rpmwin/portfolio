import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiCode, href: personalInfo.social.leetcode, label: 'LeetCode' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-light-muted dark:text-dark-muted text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-light-muted dark:text-dark-muted hover:text-accent-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-light-muted dark:text-dark-muted">
          <p>Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};
