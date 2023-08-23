import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  graphql,
  hbm,
  bbbb,
  portfolio,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  github,
  resume,
  linkedin,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hogwarts Market',
    description: 'A full stack e-commerce web app.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: hbm,
    repo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
    demo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
  },
  {
    id: 'project-2',
    name: 'Bubble Bass Bubble Buster',
    description:
      'A front end 2d platformer game. Built for a 5 day hack sprint',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bbbb,
    repo: 'https://github.com/VirtualBlakeWillis/Bubble-Bass-s-Bubble-Buster',
    demo: 'https://ethanwakeford.github.io/',
  },
  {
    id: 'project-3',
    name: 'My Portfolio',
    description: 'This is a single-page portfolio website built with React.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/VirtualBlakeWillis/Portfolio',
    demo: 'https://github.com/VirtualBlakeWillis/Portfolio',
  },
];

const contactInfo = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/virtual-blake-willis/',
    icon: linkedin,
  },
  {
    id: 'github',
    url: 'https://github.com/VirtualBlakeWillis',
    icon: github,
  },
  {
    id: 'resume',
    url: 'https://drive.google.com/file/d/1oH82GROfdPouVDuqz16j49p6ajUp2Xp1/view?usp=sharing',
    icon: resume,
  }
];

export { services, technologies, experiences, projects, contactInfo };
