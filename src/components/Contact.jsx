import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="py-2 rounded-md opacity-80 mb-8">
      <h2 className="font-semibold mb-2 ">Let's get in touch.</h2>
      <div className="dark:bg-darkbg rounded-lg flex items-center gap-4">
        <Link to="/" className="links"><FaGithub size={26}/></Link>
        <Link to="/" className="links"><FaLinkedin size={26} /></Link>
        <Link to="/" className="links"><FaTwitter size={26} /></Link>
        <Link to="/" className="links"><BiLogoGmail size={30} /></Link>
      </div>
    </div>
  )
}

export default Contact
