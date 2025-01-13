import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-2">
      <Link to="/" className=""><FaLinkedin size={20}/></Link>
      <Link to="/" className=""><FaGithub size={20}/></Link>
      <Link to="/" className=""><FaDiscord size={20}/></Link>
      <Link to="/" className=""><FaTwitter size={20}/></Link>
      <Link to="/" className=""><FaGithub size={20}/></Link>
    </div>
  )
}

export default Socials
