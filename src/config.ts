export const siteConfig = {
  name: 'Aste Ploug Henriksen',
  title: 'Software Engineer',
  description: 'Portfolio website of Aste Ploug Henriksen',
  accentColor: '#174bdb',
  symbolColor: '#000000',
  social: {
    email: 'your-email@example.com',
    linkedin: 'https://linkedin.com/in/aste',
    twitter: 'https://x.com/asteploug',
    github: 'https://github.com/aste',
    resume: 'https://github.com/aste',
  },
  aboutMe:
    'I’m a <strong>software engineer</strong> with a background in <strong>civil engineering</strong> and <strong>data-driven design</strong>. I build <strong>scalable, intuitive products</strong> with a strong focus on <strong>usability</strong> and <strong>thoughtful engineering</strong>. I enjoy working on <strong>mission-driven teams</strong> that value <strong>curiosity</strong>, <strong>collaboration</strong> and <strong>challenging conventions</strong> to deliver <strong>efficient</strong> and <strong>meaningful solutions</strong>.',

  skills: ['Javascript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
  projects: [
    {
      name: 'AI Dev Roundup Newsletter',
      description:
        'One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples',
      link: 'https://aidevroundup.com/?ref=devportfolio',
      skills: ['React', 'Node.js', 'AWS'],
    },
    {
      name: 'Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js',
      description:
        'Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices',
      link: 'https://fullstackextensions.com/?ref=devportfolio',
      skills: ['React', 'Node.js', 'AWS'],
    },
    {
      name: 'ExtensionKit',
      description:
        'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples',
      link: 'https://extensionkit.io/?ref=devportfolio',
      skills: ['React', 'Node.js', 'AWS'],
    },
  ],
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
  education: [
    {
      school: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      dateRange: '2014 - 2018',
      achievements: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        "Dean's List all semesters",
        'President of Computer Science Club',
      ],
    },
    {
      school: 'Online Platform',
      degree: 'Full Stack Development Certificate',
      dateRange: '2019',
      achievements: [
        'Completed 500+ hours of coursework',
        'Built 10+ portfolio projects',
        'Specialized in React and Node.js',
      ],
    },
  ],
};
