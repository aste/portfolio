export const siteConfig = {
  name: 'Aste Ploug Henriksen',
  title: 'Software Engineer',
  description: 'Portfolio website of Aste Ploug Henriksen',
  accentColor: '#4F46E5', // Secondary Color '#007fff'
  symbolColor: '#000000',
  social: {
    email: 'aste@tuta.io',
    linkedin: 'https://linkedin.com/in/aste',
    twitter: '',
    github: 'https://github.com/aste',
    resume: 'https://github.com/aste',
  },
  aboutMe:
    'I’m a <strong>software engineer</strong> with a background in <strong>civil engineering</strong> and <strong>data-driven design</strong>. I build <strong>scalable, intuitive products</strong> with a strong focus on <strong>usability</strong> and <strong>thoughtful engineering</strong>. I enjoy working on <strong>mission-driven teams</strong> that value <strong>curiosity</strong>, <strong>collaboration</strong> and <strong>challenging conventions</strong> to deliver <strong>efficient</strong> and <strong>meaningful solutions</strong>.',

  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'HTML',
    'CSS',
    'Tailwind',
    'Astro',
    'Vite',
    'PostgreSQL',
    'Jest',
    'Git',
  ],

  projects: [
    {
      name: 'Tandklinikken Frederikssund',
      description:
        'One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples',
      link: 'https://tandklinikken-frederikssund.dk/',
      skills: ['JavaScript', 'Bootstrap', 'Netlify', 'CI/CD'],
    },
    {
      name: 'Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js',
      description:
        'Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices',
      link: 'https://fullstackextensions.com/?ref=devportfolio',
      skills: ['React', 'Node.js', 'AWS'],
    },
  ],
  blog: [],
  experience: [
    {
      company: 'Tech Company',
      title: 'Senior Software Engineer',
      dateRange: 'Jan 2022 - Present',
      bullets: [
        'Led development of microservices architecture serving 1M+ users',
        'Reduced API response times by 40% through optimization',
        'Mentored team of 5 junior developers',
      ],
    },
    {
      company: 'Startup Inc',
      title: 'Full Stack Developer',
      dateRange: 'Jun 2020 - Dec 2021',
      bullets: [
        'Built and launched MVP product from scratch using React and Node.js',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Collaborated with product team to define technical requirements',
      ],
    },
    {
      company: 'Digital Agency',
      title: 'Frontend Developer',
      dateRange: 'Aug 2018 - May 2020',
      bullets: [
        'Developed responsive web applications for 20+ clients',
        'Improved site performance scores by 35% on average',
        'Introduced modern JavaScript frameworks to legacy codebases',
      ],
    },
  ],
  education: [],
};
