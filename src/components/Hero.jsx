import wave from "../images/wave-hello.gif";
import scrolldown from "../images/Animation.gif";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";
import workspace from "../images/herologo.jpeg";

import Skeleton from "react-loading-skeleton";

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
        <div className="max-w-2xl leading-relaxed">
          <div className="text-center sm:text-start mt-20">
            <div className="flex justify-center sm:justify-start">
              <h1 className="flex items-center text-4xl">Hello</h1>
              <img src={wave} className="w-10 opacity-50" alt="wave gif" />
            </div>
            <h1 className="text-5xl">
              I'm <span className="">Amos</span>, <br className="sm:hidden" />
              <span className="text-lg sm:text-5xl">Web Developer</span>,
            </h1>
            <p className="mt-2">
              With over two years of frontend development experience and a
              strong foundation in computer science.
            </p>
            <div className="flex justify-center sm:justify-start">
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
        <div className="hidden lg:block">
          {loading ? (
            <Skeleton
              height={550}
              width={555}
              baseColor="#e36c4b"
              highlightColor="#c0c0c0"
            />
          ) : (
            <img
              src={workspace}
              className="max-w-md"
              alt="Illustration of a workspace with a laptop and coffee"
            />
          )}
        </div>
      </section>
  )
}

export default Hero
