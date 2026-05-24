export const projects = [
  {
    id: 'chesspro',
    title: 'ChessPro',
    subtitle: 'Chess Game Analytics Platform',
    shortDescription: 'Chess analysis platform with PGN parsing, Stockfish evaluation, and AI-powered move suggestions',
    fullDescription: 'ChessPro is a comprehensive chess analysis platform that allows players to upload and analyze their games. The platform features PGN parsing, Stockfish engine integration for move evaluation, and Google Gemini AI for intelligent move suggestions. It includes both local and server-side analysis capabilities, with detailed move classification and insights.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS', 'AI'],
    tech: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      deployment: ['Docker', 'AWS EC2'],
      ai: ['Stockfish', 'Google Gemini'],
      auth: ['OAuth'],
    },
    links: {
      github: 'https://github.com/rpmwin/chesspro',
      live: null,
    },
    features: [
      'PGN file parsing and game visualization',
      'Stockfish engine integration for accurate move evaluation',
      'AI-powered move suggestions using Google Gemini',
      'Move classification system (brilliant, good, inaccuracy, mistake, blunder)',
      'Local and server-side analysis modes',
      'OAuth authentication for secure access',
      'Dockerized deployment on AWS EC2',
    ],
    challenges: [
      'Integrating Stockfish engine with Node.js backend efficiently',
      'Implementing real-time move analysis without blocking the UI',
      'Optimizing AI suggestions to balance speed and quality',
    ],
    duration: 'Jan. 2025 - Mar. 2025',
  },
  {
    id: 'Homelab',
    title: 'Homelab',
    subtitle: 'Personal Home Lab Setup',
    shortDescription: 'A personal home lab setup for experimenting with cloud technologies and DevOps practices',
    fullDescription: 'This personal home lab setup is designed to experiment with cloud technologies and DevOps practices. It includes a variety of virtual machines, containers, and networking components to create a realistic environment for testing and learning.',
    category: 'DevOps',

    tags: ['Virtualization', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
    tech: {
      frontend: null,
      backend: null,
      database: null,
      deployment: ['Netlify'],
      ai: null,
      auth: null,
    },
    links: {
      github: 'https://github.com/rpmwin/homelab',
    },
  },
  {
    id: 'Devops-Platform',
    title: 'DevOps Platform',
    subtitle: 'Automated CI/CD Pipeline',
    shortDescription: 'A comprehensive DevOps platform for automating continuous integration and deployment processes',
    fullDescription: 'The DevOps Platform is a solution designed to automate and streamline continuous integration and deployment processes. It integrates with various tools and services to provide a seamless experience for developers and operations teams.',
    category: 'DevOps',
    tags: ['CI/CD', 'Automation', 'Docker', 'Kubernetes'],
    tech: {
      frontend: null,
      backend: null,
      database: null,
      deployment: ['Netlify'],
      ai: null,
      auth: null,
    },
    links: {
      github: 'https://github.com/rpmwin/devops-platform'
    },
  },
  {
    id: 'shareme',
    title: 'ShareMe App',
    subtitle: 'Secure File Sharing Platform',
    shortDescription: 'Real-time file sharing platform with WebSocket support for text, files, and folders',
    fullDescription: 'ShareMe is a secure file-sharing platform built with Next.js and Node.js. It enables users to share text, files, and folders in real-time using WebSockets. The platform emphasizes security and seamless user experience, allowing simultaneous data transfer between multiple users.',
    category: 'Full Stack',
    tags: ['Next.js', 'Node.js', 'Express', 'WebSockets'],
    tech: {
      frontend: ['Next.js', 'React'],
      backend: ['Node.js', 'Express'],
      realtime: ['WebSockets'],
    },
    links: {
      github: 'https://github.com/rpmwin/shareme',
      live: null,
    },
    features: [
      'Real-time file transfer using WebSockets',
      'Support for text, files, and folder sharing',
      'Secure file encryption during transfer',
      'Multi-user simultaneous connections',
      'Clean and intuitive user interface',
      'Progress tracking for file uploads',
    ],
    challenges: [
      'Implementing efficient WebSocket connection management',
      'Handling large file transfers without memory issues',
      'Ensuring data security during transmission',
    ],
    duration: 'Apr. 2024 - Jul. 2024',
  },
  {
    id: 'rice-grain-analyzer',
    title: 'Rice Grain Analyzer',
    subtitle: 'AI-Powered Image Segmentation',
    shortDescription: 'YOLOv8-based rice grain analysis system for precise segmentation and quality classification',
    fullDescription: 'Rice Grain Analyzer is an AI-powered image segmentation application designed for agricultural quality control. Using YOLOv8, the system performs precise segmentation and classification of rice grains from high-resolution images, distinguishing between good and broken grains. The solution features a Django backend and React Native mobile frontend, deployed on AWS EC2.',
    category: 'AI/ML',
    tags: ['YOLOv8', 'AWS', 'Django', 'React Native', 'Computer Vision'],
    tech: {
      ai: ['YOLOv8', 'Computer Vision'],
      backend: ['Django', 'Python'],
      frontend: ['React Native'],
      deployment: ['AWS EC2'],
    },
    links: {
      github: 'https://github.com/rpmwin/rice-grain-analyzer',
      live: null,
    },
    features: [
      'YOLOv8-based image segmentation for rice grains',
      'Precise classification of good vs. broken grains',
      'High-resolution image processing capabilities',
      'React Native mobile app for field usage',
      'Django REST API backend',
      'Cloud deployment on AWS EC2',
    ],
    challenges: [
      'Training YOLOv8 model with limited agricultural dataset',
      'Optimizing inference speed for mobile devices',
      'Handling various lighting and image quality conditions',
    ],
    duration: 'Jul. 2024 - Aug. 2024',
  },
  {
    id: 'Arcade-Games',
    title: 'Arcade Games',
    subtitle: 'Browser-Based Arcade Game Collection',
    shortDescription: 'A collection of classic arcade games built with HTML5 and JavaScript',
    fullDescription: 'Arcade Games is a collection of classic arcade games built with HTML5 and JavaScript. The platform features a variety of games including space invaders, pacman, and tetris, all playable directly in the browser.',
    category: 'Frontend',
    tags: ['HTML5', 'JavaScript', 'CSS3'],
    tech: {
      frontend: ['HTML5', 'JavaScript', 'CSS3'],
      backend: null,
      database: null,
      deployment: ['Netlify'],
      ai: null,
      auth: null,
    },
    links: {
      github: 'https://github.com/rpmwin/games',
      live: null,
    },
    features: [
      'Classic arcade game collection',
      'Responsive design for all devices',
      'Smooth gameplay and animations',
      'Intuitive user interface',
    ],
    challenges: [
      'Optimizing game performance across different browsers',
      'Creating engaging gameplay mechanics',
      'Ensuring cross-platform compatibility',
    ],
    duration: 'Mar. 2024 - May 2024',
  }
  
];

export const getProjectCategories = () => {
  const categories = new Set();
  projects.forEach(p => categories.add(p.category));
  return ['All', ...Array.from(categories)];
};

export const getProjectTags = () => {
  const tags = new Set();
  projects.forEach(p => p.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

export const getProjectById = (id) => {
  return projects.find(p => p.id === id);
};
