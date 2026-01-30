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
        'Production website for a dental clinic with custom booking and contact flows plus a news section for ongoing updates and SEO, built and deployed end to end.',
      link: 'https://tandklinikken-frederikssund.dk/',
      github: 'https://github.com/aste/dentistFrs',
      skills: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'APIs', 'Netlify', 'CI/CD'],
    },
  ],
  blog: [],
  experience: [
  {
    company: 'Independent Consultant',
    title: 'Software Engineer & Construction Engineer',
    dateRange: 'Aug 2022 – Present',
    bullets: [
      'Built and delivered a production web application for a dental clinic, including custom booking and contact flows and a lightweight news section to support ongoing content updates and SEO. Owned the solution end to end, from requirements and technical decisions to deployment.',
      'Designed and implemented a responsive, SEO-optimised frontend using JavaScript, HTML, CSS, and Bootstrap, integrating external APIs and deploying via Netlify with automated CI/CD.',
      'Worked directly with clients to translate real-world requirements into pragmatic technical solutions, balancing usability, maintainability, and delivery speed. Increased site traffic and user engagement by 400%.',
      'Delivered civil engineering consulting for residential and commercial projects, applying analytical problem-solving and project management to ensure fast delivery and regulatory compliance.',
    ],
  },
  {
    company: 'Computas',
    title: 'Full-Stack Software Engineer Intern',
    dateRange: 'Feb 2022 – Apr 2022',
    bullets: [
      'Contributed to updates of internal tools and client-facing projects for IKEA and Wash World, working with Angular, TypeScript, and cloud-based development workflows on Google Cloud Platform.',
      'Collaborated within a professional consultancy environment, gaining hands-on experience with modern frontend frameworks, version control, and cloud infrastructure.',
    ],
  },
  {
    company: 'Rambøll',
    title: 'Computational Design Engineer',
    dateRange: 'Jan 2017 – Nov 2021',
    bullets: [
      'Developed and deployed computational design tools using Python and Grasshopper to automate CAD workflows, saving over 1,000 hours of manual design and engineering work across 10+ projects.',
      'Applied algorithmic thinking and data-driven optimisation to support early-stage design decisions, enabling teams to evaluate complex trade-offs and improve delivery efficiency.',
      'Ranked 7 out of 700+ teams (top 1%) in Rambøll’s Innovation Cup by prototyping a circular reuse solution for wind turbine materials in the construction industry.',
    ],
  },
  {
    company: 'Hayway',
    title: 'Founder & Design Engineer',
    dateRange: 'May 2014 – Oct 2021',
    bullets: [
      'Founded and led a design and innovation firm focused on developing novel products and applied technologies, working across concept development, prototyping, and technical validation.',
      'Developed an experimental lens technology with potential myopia-reversing effects in collaboration with Rigshospitalet, funded by Innovation Fund Denmark.',
      'Created C-sense, a cyclist safety technology, in partnership with Imtech, alongside additional projects with research institutions and industry partners.',
    ],
  },
  {
    company: '3XN / GXN',
    title: 'Computational Design Engineer',
    dateRange: 'Jan 2014 – Jul 2015',
    bullets: [
      'Led parametric design and automation of facade geometry using Python and Grasshopper for the Quay Quarter Tower competition, contributing to the firm’s first international high-rise win.',
      'Engineered energy modelling and static shading systems to optimise solar protection, daylight distribution, and thermal performance, supporting performance-driven design decisions at early project stages.',
    ],
  },
],
  education: [],
};
