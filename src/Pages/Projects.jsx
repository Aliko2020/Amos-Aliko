import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";

const Nav = () => (
  <div className="flex justify-start gap-2 pb-2">
    <div className="w-4 h-4 bg-red-500 hover:bg-red-800 opacity-70 rounded-full"></div>
    <div className="w-4 h-4 bg-yellow-400 hover:bg-yellow-700 opacity-70 rounded-full"></div>
    <div className="w-4 h-4 bg-green-800 hover:bg-green-950 opacity-70 rounded-full"></div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="shadow-sm rounded-lg p-4 w-full sm:max-w-sm border dark:border-none dark:bg-darkbg bg-white dark:hover:bg-darkbgc cursor-pointer">
      <Nav />
      <div className="w-full h-48 bg-gray-200 dark:bg-darkbgc mb-4 mt-4 flex items-center justify-center">
        {!loaded && <span className="text-sm text-center opacity-50"></span>}
        <img
          src={project.image}
          alt={project.name}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <h2 className="text-lg font-bold">{project.name}</h2>
      <p className="mb-4">{project.discription}</p>
      <div className="flex flex-wrap items-center mb-4">
        {project.tools.map((tool, index) => (
          <span key={index} className="dark:text-opacity-50 dark:bg-darkbgc text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            {tool}
          </span>
        ))}
      </div>
      <div className="flex items-center pt-2">
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mr-4 links">
          <FaGithub size={26} />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="links">
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="flex flex-col mt-20 p-8 sm:p-0">
      <h1 className="text-lg hidden sm:flex font-semibold mb-8">~/Projects</h1>
      <div className="flex flex-wrap justify-between sm:flex-row gap-4 dark:text-lightbg dark:text-opacity-50">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
