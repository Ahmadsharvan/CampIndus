export type Program = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  accent: string;
  image: string;
  topics: string[];
  highlights?: { title: string; description: string }[];
  learningApproach?: string;
  outcome?: string;
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
  {
    id: 'women-in-corporate',
    title: 'Women in Corporate — Navigate & Thrive',
    category: 'Women in Corporate',
    shortDescription: 'Build confidence, leadership and practical strategies to navigate corporate careers and thrive at work.',
    description: 'Women in Corporate is a career development and workplace empowerment program designed to help women navigate professional challenges, build confidence, strengthen leadership capabilities, and thrive in corporate environments. Through real-world experiences, practical strategies, and industry-relevant insights, the program supports women at different stages of their careers.',
    accent: 'program-tone-violet',
    image: '/program-icons/women-in-corporate.png',
    topics: [
      'Building Confidence & Visibility',
      'Handling Workplace Challenges',
      'Career Progression & Leadership',
      'Work–Life Integration & Boundaries',
      'Returning to a Career After a Break',
      'Practical Strategies to Succeed',
    ],
    highlights: [
      {
        title: 'Building Confidence & Visibility',
        description: 'Develop professional confidence, communicate achievements effectively, and establish a strong workplace presence.',
      },
      {
        title: 'Handling Workplace Challenges',
        description: 'Navigate difficult conversations, workplace dynamics, professional expectations, and conflict resolution.',
      },
      {
        title: 'Career Progression & Leadership',
        description: 'Strengthen leadership skills, explore career advancement opportunities, and prepare for greater responsibilities.',
      },
      {
        title: 'Work–Life Integration & Boundaries',
        description: 'Manage professional and personal commitments, establish healthy boundaries, and support sustainable career growth.',
      },
      {
        title: 'Returning to a Career After a Break',
        description: 'Rebuild confidence, refresh workplace skills, and prepare for a successful return to professional life.',
      },
      {
        title: 'Practical Strategies to Succeed',
        description: 'Learn actionable approaches to networking, decision-making, personal branding, and long-term career development.',
      },
    ],
    learningApproach: 'The program combines real stories, workplace scenarios, practical exercises, guided discussions, and industry perspectives to help participants apply their learning to real professional situations.',
    outcome: 'Participants gain greater confidence, improved workplace communication, practical career-management skills, and strategies to pursue leadership opportunities and sustainable professional growth.',
  },
];
