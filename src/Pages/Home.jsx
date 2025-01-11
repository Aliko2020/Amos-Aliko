import { Link } from "react-router-dom";
import globe from '../../public/images/globe.png'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Home = () => {
  return (
    <main className="p-4 h-[100vh] sm:px-12">
      <header className="flex justify-between items-center">
        <Link className="logo">Aliko</Link>
        <nav>
          <ul className="flex gap-8 font-semibold text-standout">
            <Link className="links current-link" to="/">Resume</Link>
            <Link className="links current-link" to="/projects">Projects</Link>
            <Link className="links current-link" to="/Contact">Contact</Link>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="max-w-lg leading-relaxed">
            <span className="hero-text bg-standout">Hello!,</span>
            <h1 className="hero-text bg-standout">I’m Aliko Amos,Web Developer,</h1>
            <p className="mt-2 ">I am a full-stack web developer with a strong foundation in computer science, specializing in front-end development within the MERN stack. Additionally, I have extensive experience in I.T. support, ensuring seamless technology operations.</p>
            <button className="">Get In Contact</button>
        </div>
      </section>
      <footer className="flex justify-between items-center gap-8">
        <div className="flex gap-4">
            <Link to="/" className="flex border-r-2 border-standout pr-4 links">Linkedin <FaExternalLinkSquareAlt size={8} /></Link>
            <Link to="/" className="flex links">Git <FaExternalLinkSquareAlt size={8} /></Link>
        </div>
        <Link to="/">HIRE ME</Link>
      </footer>
    </main>
  );
};

export default Home;
