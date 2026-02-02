export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Polytechnic University of Milan',
    location: 'Milan, Italy',
    period: '2021 - 2023',
    description: 'Specialized in Software Engineering and Web Technologies',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Polytechnic University of Milan',
    location: 'Milan, Italy',
    period: '2018 - 2021',
    description: 'Foundation in computer science principles and engineering practices',
  },
];
