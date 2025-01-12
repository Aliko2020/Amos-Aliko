import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center lg:justify-end items-center pt-4 px-12">
        <nav className="p-2 sticky bg-[#f2f2f0] rounded-lg dark:text-darkbg shadow-md sticky">
          <ul className="flex gap-8 font-semibold ">
            <Link className="links current-link" to="/about">
              About
            </Link>
            <Link className="links current-link" to="/projects">
              Projects
            </Link>
            <Link className="links current-link" to="/">
              Resume
            </Link>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar