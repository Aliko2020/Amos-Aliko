import EducationComponent from "../components/EducationComponent";
import HeadComponent from "../components/headComponent";
import SkillsTools from "../components/SkillsTools";




const About = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-center sm:gap-8 p-4 min-h-screen">
      <div className="w-full lg:w-auto">
        <HeadComponent />
      </div>
      <div className="flex flex-col gap-2 max-w-3xl mt-8">
        <p className="">Hello again, I’m Amos, a Software Engineer with 2+ years of front-end development experience, now advancing towards becoming a Full-stack developer. I specialize in creating scalable web applications that deliver exceptional user experiences. Driven by curiosity and a passion for technology, I constantly upgrade my skills to stay at the cutting edge. I thrive on challenges and excel in transforming complex requirements into high-quality solutions.</p>
        
        <div className="">
          <EducationComponent />
        </div>
        <h2 className="font-semibold">Skills/tools</h2>
        <p>Primarily, I like developing ReactJS Apps and enjoy tuning performances for web-apps in general. Find below the skills, tools and technologies I use,</p>
        <SkillsTools />
      
      </div>
    </section>
  );
};

export default About;
