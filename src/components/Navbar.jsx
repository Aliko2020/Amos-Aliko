import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="flex justify-center lg:justify-end items-center pt-2 lg:pt-8 px-4 mb-2">
      <nav className="p-2 rounded-lg shadow-md lg:fixed text-white bg-[#5b5e62] relative">
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 p-[1px]">
          <div className="bg-[#5b5e62] h-full w-full rounded-lg"></div>
        </div>
        <ul className="flex gap-8 font-semibold">
          <Link className="links current-link" to="/">
            <CiHome size={24} />
          </Link>
          <Link className="links current-link" to="/about">
            <CiUser size={24} />
          </Link>
          <Link className="links current-link" to="/projects">
            <CiFolderOn size={25} />
          </Link>
          <Link className="links current-link" to="/">
            <CiMail size={24} />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
