import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="flex justify-center lg:justify-end items-center pt-4 px-12">
        <nav className="p-2 bg-[#f2f2f0] rounded-lg dark:text-darkbg shadow-md fixed">
          <ul className="flex gap-8 font-semibold ">
          <Link className="links current-link" to="/">
              <CiHome size={24} />
          </Link>
            <Link className="links current-link" to="/about">
              <CiUser size={24}/>
            </Link>
            <Link className="links current-link" to="/projects">
              <CiFolderOn size={25}/>
            </Link>
            <Link className="links current-link" to="/">
              <CiMail size={24} />
            </Link>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar