import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiUser, CiFolderOn, CiLight, CiDark } from "react-icons/ci";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-center lg:justify-end">
      <nav className="p-2 rounded-lg shadow-md mt-8 fixed dark:bg-darkbg dark:text-white dark:text-opacity-50">
        <ul className="flex gap-4 font-semibold">
          <Link className="flex gap-1 items-center links current-link" to="/">
            <GoHome size={24} /> <span className="hidden sm:flex">Home</span>
          </Link>
          <Link className="flex gap-1 items-center links current-link" to="/about">
            <CiUser size={24} /> <span className="hidden sm:flex">About</span>
          </Link>
          <Link className="flex gap-1 items-center links current-link" to="/projects">
            <CiFolderOn size={25} /> <span className="hidden sm:flex">Projects</span>
          </Link>
          <Link className="hidden sm:flex gap-1 items-center links current-link" to="/projects">
            <CiFolderOn size={25} /> <span className="">CV</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="dark:text-white rounded dark:opacity-50 links"
          >
            {darkMode ? <CiLight size={25} /> : <CiDark size={25} />}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
