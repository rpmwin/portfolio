export const TechStack = ({ tech }) => {
  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'deployment', label: 'Deployment' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'auth', label: 'Authentication' },
    { key: 'realtime', label: 'Real-time' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Tech Stack</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const items = tech[category.key];
          if (!items || items.length === 0) return null;

          return (
            <div key={category.key}>
              <h4 className="font-semibold mb-3 text-accent-primary text-sm uppercase tracking-wide">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
