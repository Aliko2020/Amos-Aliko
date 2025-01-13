import { Link } from "react-router-dom";
import workspace from "../images/herologo.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";
import assat from '../images/asat.png'
import Typewriter from "../components/Typewritter";

const Home = () => {
  return (
    <main className="flex flex-col p-4">
        {/* hero text and image start */}
        <section className="hero flex-grow flex items-center">
          <div className="max-w-2xl leading-relaxed">
            <div>
              <span className="text-3xl">
                <Typewriter text="H i, " />
              </span>
              <br />
              <h1 className="text-3xl">
                <Typewriter text="I'm Amos, a Web Developer," />
              </h1>
              <p className="mt-2">
                with over two years of experience and a strong foundation in
                computer science. I'm passionate about finding creative
                solutions to challenges and sharing them with the world through
                the internet. I'm always eager to connect with other developers
                and learn from their experiences.
              </p>
              <button
                className="btn btn-connect"
                onClick={() =>
                  (window.location.href = "mailto:your-email@example.com")
                }
                aria-label="connect"
              >
                Let's Connect
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={workspace}
              className="max-w-md"
              alt="Illustration of a workspace with a laptop and coffee"
            />
          </div>
        </section>
        {/* hero text and image end */}
        {/* footer starts here */}
        <section className="flex justify-between items-center gap-8">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aliko-amos-0a7098246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex border-r-2 border-standout pr-4 links"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn <FaExternalLinkAlt size={10} />
            </a>
            <a
              href="https://github.com/Aliko2020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex links"
              aria-label="Visit my GitHub profile"
            >
              GitHub <FaExternalLinkAlt size={10} />
            </a>
          </div>
          <Link className="links" to="/" aria-label="Hire me">
            Resume
          </Link>
        </section>
    </main>
  );
};

export default Home;
