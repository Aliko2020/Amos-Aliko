import "react-loading-skeleton/dist/skeleton.css";
import About from "./About";
import Projects from "./Projects";
import Hero from "../components/Hero";


const Home = () => {

  return (
    <main className="flex flex-col p-4">
      {/* hero text and image start */}
      <Hero />
      {/* hero text and image end */}
      <About />
      <Projects />
    </main>
  );
};

export default Home;
