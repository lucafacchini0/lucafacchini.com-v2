export interface WhatIDoItem {
  title: string;
  description: string;
  link?: string;
}

export const whatIDo: WhatIDoItem[] = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern frameworks like React, TypeScript, and Tailwind CSS.',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
  },
  {
    title: 'Backend Development',
    description: 'Developing scalable server-side applications and APIs using Node.js, Express, and various databases.',
  },
];
