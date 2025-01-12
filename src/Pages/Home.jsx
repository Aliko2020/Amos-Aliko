import { Link } from "react-router-dom";
import workspace from "../images/workspace.jpeg";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";



const Home = () => {
  return (
    <main className="p-4">
      <section className="hero ">
        <div className="max-w-2xl leading-relaxed">
          <div className="">
          <span className="hero-text text-3xl">Hello,</span>
          <br />
          <h1 className="hero-text text-3xl">
            I’m Amos,Web Developer,
          </h1>
          <p className="mt-2 ">
            I'm Aliko, a web developer with over two years of experience and a
            strong foundation in computer science. I'm passionate about finding
            creative solutions to challenges and sharing them with the world
            through the internet. I'm always eager to connect with other
            developers and learn from their experiences
          </p>
          <button className="btn-connect current-link">
            <BiSolidCoffeeAlt size={30} />
            Let's Contact
          </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={workspace}
            className="max-w-md"
            alt="work space illustration"
          />
        </div>
      </section>
      <div className="flex justify-between items-center gap-8">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/aliko-amos-0a7098246/"
            target="_blank"
            className="flex border-r-2 border-standout pr-4 links"
          >
            LinkedIn{" "}
            <FaExternalLinkAlt size={10}/>
          </a>
          <a
            href="https://github.com/Aliko2020"
            target="_blank"
            className="flex links"
          >
            GitHub{" "}
            <FaExternalLinkAlt size={10}/>
          </a>
        </div>
        <Link className="links" to="/">
          HIRE ME
        </Link>
      </div>
    </main>
  );
};

export default Home;
