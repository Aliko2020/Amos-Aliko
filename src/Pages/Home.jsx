import "react-loading-skeleton/dist/skeleton.css";
import About from "./About";
import Hero from "../components/Hero";


const Home = () => {

  return (
    <main className="flex flex-col p-4">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
