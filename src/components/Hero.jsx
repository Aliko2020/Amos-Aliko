import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Contact from "./Contact";




const Hero = () => {
  return (
    <section className="hero flex justify-around items-center p-8">
      <div className="hidden lg:flex">
         <Contact />
      </div>
      <div className="max-w-5xl leading-relaxed">
        <div className="sm:text-start">
          <h1 className="text-3xl font-bold mb-2">
            I'M AMOS ALIKO
          </h1>
          <h2 className="text-3xl font-bold text-ligh">Frontend Developer</h2>
          <p className="mt-2">
            With over two years of frontend development experience and a
            strong foundation in computer science.I'm passionate about crafting delightful web experiences, seamlessly blending design and functionality. When I'm not coding, you can find me exploring the world of technology, catching up on the latest tech trends, and seeking innovative solutions.
          </p>
          <div className="links inline-flex p-2 rounded-r-md cursor-pointer justify-center items-center dark:text-lightbck gap-2 bg-pink-200 hover:bg-pink-300 dark:bg-darkbgc border-darkbgc sm:justify-start mt-4 dark:hover:bg-darkbg">
            <Link to="/about">Learn More</Link> <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
