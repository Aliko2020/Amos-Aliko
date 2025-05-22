import smslogin from './images/smslogin.png'
import bookworm from './images/bookworm.png'
import porfolio from './images/portfolio.png'
import javascript from './images/javascript.svg';
import html from './images/html.svg';
import postgresql from './images/postgresql.svg';
import css from './images/css3.svg'
import redux from './images/redux.svg';
import tailwind from './images/tailwindcss.svg';
import node from './images/node-js.svg';
import sql from './images/sql.svg';
import mongodb from './images/mongodb.svg';
import react from './images/react.svg';
import git from './images/git.svg';
import python from './images/python.svg'




export const projects = [
  {
    name: "School Management System",
    discription: "A comprehensive software solution designed to address the challenges of manual operations. It addresses the challenges of traditional, manual processes by providing a centralized and automated platform that streamlines administrative and academic tasks.",
    image: smslogin,
    tools: ["React", "Tailwindcss","Express","PSQL"],
    repo: "https://shorturl.at/XH87X",
    live: "https://shorturl.at/XH87X"
  },
  {
    name: "Bookworm",
    discription: "Bookworm is a web application designed for book enthusiasts! Readers can sign up, explore a list of books, add to favorites, manage their 'Next to Read' list, and recommend books to other readers in the community.",
    image: bookworm,
    tools: ["React", "Tailwindcss","node","mongoDb"],
    repo: "https://github.com/Aliko2020/Bookworm",
    live: "https://bookworm-jsx7.onrender.com/"
  },
  {
    name: "Portfolio Website",
    discription: "A personal portfolio website that showcases my projects, technical skills, and developer journey. Built with modern frontend technologies, it serves as a centralized hub for potential employers, collaborators, or clients to explore my work, tools I use, and get in touch.",
    image: porfolio,
    tools: ["React", "Tailwindcss"],
    repo: "https://github.com/Aliko2020/Amos-Aliko",
    live: "https://aliko.netlify.app"
  }
];

export const education = [
  {
    title: "Bachelor of Technology (B-Tech) In Computer Science",
    institution: "Sunyani Technical University",
    timeFrame: {
      from: "Jan 2024",
      to: "Nov 2025",
    },
  },
  {
    title: "Higher National Diploma (HND) Computer Science",
    institution: "Sunyani Technical University",
    timeFrame: {
      from: "Jan 2021",
      to: "Nov 2023",
    },
  },
];

export const skills = [
  {
    name: "HTML5",
    image: html,
    bgColor: "#5B6262",
  },
  {
    name: "CSS3",
    image: css, 
    bgColor: "#5B6262",
  },
  {
    name: "TailwindCss",
    image: tailwind, 
    bgColor: "#5B6262",
  },
  {
    name: "JS ES6",
    image: javascript,
    bgColor: "#5B6262",
  },
  {
    name: "Python",
    image: python,
    bgColor: "#5B6262",
  },
  {
    name: "React",
    image: react,
    bgColor: "#5B6262",
  },
  {
    name: "PostgreSQL",
    image: postgresql,
    bgColor: "#5B6262",
  },
  {
    name: "Redux",
    image: redux,
    bgColor: "#5B6262",
  },
  {
    name: "Node.js",
    image: node,
    bgColor: "#5B6262",
  },
  {
    name: "SQL",
    image: sql,
    bgColor: "#5B6262",
  },
  {
    name: "MongoDB",
    image: mongodb,
    bgColor: "#5B6262",
  },
  {
    name: "Git",
    image: git,
    bgColor: "#5B6262",
  }
];