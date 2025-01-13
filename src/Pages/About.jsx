import HeadComponent from "../components/headComponent";
import Socials from "../components/Socials";


const About = () => {
  return (
    <section className="flex flex-col lg:flex-row p-4">
      <div className="">
        <HeadComponent />
      </div>
      <div className="flex flex-col gap-2 max-w-2xl mt-10">
        <div className="">
          <h2 className="text-lg text-center font-semibold sm:text-start">About</h2>
        </div>
        <p className="mb-1">Hello again, I’m Amos, a Software Engineer with 2+ years of front-end development experience, now advancing towards becoming a Full-stack developer. I specialize in creating scalable web applications that deliver exceptional user experiences. Driven by curiosity and a passion for technology, I constantly upgrade my skills to stay at the cutting edge. I thrive on challenges and excel in transforming complex requirements into high-quality solutions. Let’s connect and see how my expertise can add value to your next project.</p>
        <p className="">let's connect and work on something amazing</p>
        <Socials />
        <div className="mt-2">
          <h2 className="text-lg mb-1 font-semibold text-center sm:text-start">Skills</h2>
          
        
        </div>
      </div>
    </section>
  );
};

export default About;
