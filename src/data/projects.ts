export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/lucafacchini/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/lucafacchini/taskmanager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current conditions and forecasts using various weather APIs with interactive charts.',
    tags: ['React', 'Chart.js', 'API Integration'],
    github: 'https://github.com/lucafacchini/weather-dashboard',
  },
];
