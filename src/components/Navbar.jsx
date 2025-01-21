import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

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
    <header className="flex justify-center  lg:justify-end items-center pt-2 lg:pt-8 px-4 mb-2 mt-6 lg:mt-2">
      <nav className="p-2 rounded-lg shadow-md border border-white fixed bg-lightbg text-lighttxt dark:bg-darkbgc dark:text-white dark:text-opacity-50 dark:border-lightbg dark:border-opacity-50">
        <ul className="flex gap-8 font-semibold">
          <Link className="links current-link" to="/">
            <GoHome size={24} />
          </Link>
          <Link className="links current-link" to="/about">
            <CiUser size={24} />
          </Link>
          <Link className="links current-link" to="/projects">
            <CiFolderOn size={25} />
          </Link>
          <button 
            onClick={toggleDarkMode} 
            className="dark:text-white rounded dark:opacity-50 links"
          >
            {darkMode ? <CiLight size={25} /> : <CiDark size={25}/>}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
