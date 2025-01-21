import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Laidbydiba Booking App",
    discription: "Laidbydiba is a web application designed to streamline the process of booking beauty and hairstyling services",
    image: "",
    tools: ["React", "Tailwindcss","node","mongoDb"],
    repo: "https://github.com/Aliko2020/laidbydiba",
    live: "https://laidbydiba-1.onrender.com/"
  },
  {
    name: "Porfolio Website Aliko",
    discription: "Laidbydiba is a web application designed to streamline the process of booking beauty and hairstyling services",
    image: "",
    tools: ["React", "Tailwindcss","node","mongoDb"],
    repo: "https://github.com/Aliko2020/laidbydiba",
    live: "https://github.com/Aliko2020/laidbydiba"
  },
  {
    name: "Find Your Tribe Food",
    discription: "Laidbydiba is a web application designed to streamline the process of booking beauty and hairstyling services",
    image: "",
    tools: ["React", "Tailwindcss","node","mongoDb"],
    repo: "https://food-delivery-app-client-vqd6.onrender.com/",
    live: "https://food-delivery-app-client-vqd6.onrender.com/"
  },
  {
    name: "Todo App",
    discription: "A todo app created with react to practice useContext with useReducer",
    image: "",
    tools: ["React", "Tailwindcss","LocalStorage"],
    repo: "https://github.com/Aliko2020/Todo-App",
    live: "https://todo-app-46u2.onrender.com/"
  }
];
const Nav = ()=>{
    return (
        <div className='flex justify-start gap-2 pb-2 border-b border-darkbgc'>
            <div className="w-4 h-4 bg-red-500 hover:bg-red-800 opacity-70 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 hover:bg-yellow-700 opacity-70 rounded-full"></div>
            <div className="w-4 h-4 bg-green-800 hover:bg-green-950 opacity-70 rounded-full"></div>
        </div>
    )
}

const Project = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 dark:text-lightbg dark:text-opacity-50">
      {projects.map((project, index) => (
        <div key={index} className="shadow-sm rounded-lg mr-4 p-2 mb-6 w-full sm:max-w-sm border border-darkbgc">
          <Nav />
          <h2 className="text-lg font-simibold mb-2 mt-4">{project.name}</h2>
          <p className="mb-4">{project.discription}</p>
          <div className="flex flex-wrap  items-center mb-4">
            {project.tools.map((tool, index) => (
              <span key={index} className="dark:text-opacity-50 dark:bg-darkbgc  text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{tool}</span>
            ))}
          </div>
          <div className="flex items-center border-t border-darkbgc pt-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 links"
            >
              <FaGithub size={26}/>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
