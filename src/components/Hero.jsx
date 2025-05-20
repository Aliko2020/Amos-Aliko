import scrolldown from "../images/Animation.gif";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";
import workspace from "../images/herologo.jpeg";


const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = workspace;
    img.onload = () => setLoading(false);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero flex items-center">
      <div className="max-w-5xl leading-relaxed">
        <div className="text-center sm:text-start mt-20">
          <h1 className="text-4xl mb-2">
            I'M <span className="">AMOS ALIKO</span>
          </h1>
          <h2 className="text-4xl">Frontend Developer | MERN STACK</h2>
          <p className="mt-2">
            With over two years of frontend development experience and a
            strong foundation in computer science.I'm passionate about crafting delightful web experiences, seamlessly blending design and functionality. When I'm not coding, you can find me exploring the world of technology, catching up on the latest tech trends, and seeking innovative solutions.
          </p>
          <div className="flex justify-center sm:justify-start mt-4">
            <Contact />
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={scrollToBottom} aria-label="Scroll down">
              <img
                src={scrolldown}
                alt="Scroll down"
                className="w-10 opacity-50"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
