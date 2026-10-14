export type Program = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  accent: string;
  image: string;
  topics: string[];
};

export const programs: Program[] = [
  {
    id: 'workplace-readiness',
    title: 'Workplace Readiness',
    category: 'Foundation',
    shortDescription: 'Understand corporate culture, workplace etiquette, and professional dynamics.',
    description: 'Develop the confidence and working habits expected in modern professional environments.',
    accent: 'program-tone-blue',
    image: '/program-icons/workplace-readiness.png',
    topics: ['Corporate culture and expectations', 'Professional conduct', 'Teamwork and collaboration', 'Time management'],
  },
  {
    id: 'excel',
    title: 'Excel',
    category: 'Digital Skills',
    shortDescription: 'Build practical spreadsheet capability for reporting, analysis and productivity.',
    description: 'Learn formulas, dashboards, sorting, filtering, and systematic problem-solving with Excel.',
    accent: 'program-tone-green',
    image: '/program-icons/excel.png',
    topics: ['Spreadsheet fundamentals', 'Formulas and functions', 'Charts and reporting', 'Pivot tables'],
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    category: 'Analytics',
    shortDescription: 'Turn data into actionable insights with dashboards and visual storytelling.',
    description: 'Help students translate raw data into meaningful visual narratives for business decisions.',
    accent: 'program-tone-amber',
    image: '/program-icons/power-bi.png',
    topics: ['Data preparation', 'Data modeling', 'Dashboards', 'Business scenarios'],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    category: 'Future Skills',
    shortDescription: 'Explore practical AI workflows for productivity and modern workplaces.',
    description: 'Support responsible and practical adoption of AI tools across learning, research and work.',
    accent: 'program-tone-violet',
    image: '/program-icons/ai-tools.png',
    topics: ['Responsible use of AI', 'Prompt design', 'Research workflows', 'Verification and ethics'],
  },
  {
    id: 'business-simulations',
    title: 'Business Simulations',
    category: 'Experiential Learning',
    shortDescription: 'Practice business thinking in realistic, team-based decision scenarios.',
    description: 'Develop confidence in analytical thinking, prioritisation and strategic decision-making.',
    accent: 'program-tone-teal',
    image: '/program-icons/business-simulations.png',
    topics: ['Scenario decision-making', 'Team-based problem solving', 'Resource allocation', 'Reflection and feedback'],
  },
  {
    id: 'communication',
    title: 'Communication',
    category: 'Professional Skills',
    shortDescription: 'Strengthen presentation, collaboration, and professional communication skills.',
    description: 'Support students in speaking clearly, writing professionally and engaging with teams confidently.',
    accent: 'program-tone-blue',
    image: '/program-icons/communication.png',
    topics: ['Verbal communication', 'Professional writing', 'Presentation skills', 'Listening and collaboration'],
  },
  {
    id: 'career-preparation',
    title: 'Career Preparation',
    category: 'Career Growth',
    shortDescription: 'Build stronger resumes, interview readiness and workplace awareness.',
    description: 'Help students prepare for internships, application processes and transition into professional life.',
    accent: 'program-tone-violet',
    image: '/program-icons/career-preparation.png',
    topics: ['Resume development', 'Interview preparation', 'Professional introductions', 'Career research'],
  },
];
