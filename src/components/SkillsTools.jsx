import javascript from '../images/javascript.svg';
import html from '../images/html.svg';
import postgresql from '../images/postgresql.svg';
import redux from '../images/redux.svg';
import tailwind from '../images/tailwind-css.svg';
import node from '../images/node-js.svg';
import sql from '../images/sql.svg';
import mongodb from '../images/mongodb.svg';
import react from '../images/react.svg';
import git from '../images/git.svg';

const skills = [
  {
    name: "HTML5",
    image: html,
    bgColor: "#5B6262",
  },
  {
    name: "CSS3",
    image: tailwind, // Assuming this represents CSS
    bgColor: "#5B6262",
  },
  {
    name: "JavaScript ES6",
    image: javascript,
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
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-darkbg rounded-lg">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-4 rounded-lg mt-4 shadow-lg" style={{ backgroundColor: skill.bgColor }}>
          <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
          <h3>{skill.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default SkillsTools;
