import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="py-2 rounded-md opacity-80 mb-8">
      <div className="flex flex-col items-center gap-4">
        <Link to="https://github.com/Aliko2020" className="links">
          <FaGithub size={26} />
        </Link>

        <Link to="https://www.linkedin.com/in/amos-aliko-0a7098246/" className="links">
          <FaLinkedin size={26} />
        </Link>

        <Link to="/" className="links">
          <FaTwitter size={26} />
        </Link>

        <a href="mailto:alikoamosofficial@gmail.com" className="links">
          <BiLogoGmail size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
