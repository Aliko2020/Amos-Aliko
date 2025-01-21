import javascript from '../images/javascript.svg';
import html from '../images/html.svg';
import postgresql from '../images/postgresql.svg';
import css from '../images/CSS3.svg'
import redux from '../images/redux.svg';
import tailwind from '../images/tailwindcss.svg';
import node from '../images/node-js.svg';
import sql from '../images/sql.svg';
import mongodb from '../images/mongodb.svg';
import react from '../images/react.svg';
import git from '../images/git.svg';
import python from '../images/python.svg'

const skills = [
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

const SkillsTools = () => {
  return (
    <section className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-4 lg:mt-1 dark:bg-darkbg rounded-lg skills">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col justify-center border border-opacity-20 dark:border-opacity-50 dark:bg-darkbgc p-2 items-center rounded-lg mt-4 hover:border hover:border-gray-200 dark:hover:border-gray-400">
          <img src={skill.image} alt={skill.name} className="w-6 h-6 mb-2" />
          <h3 className=''>{skill.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default SkillsTools;
