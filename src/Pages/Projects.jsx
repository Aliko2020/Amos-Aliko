import Project from "../components/Project"

const Projects = () => {
  return (
    <div className="flex flex-col p-4 m-auto">
      <h1 className="text-xl font-semibold text-center mt-8 sm:hidden">Projects</h1>
      <Project />
    </div>
  )
}

export default Projects