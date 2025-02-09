import EducationComponent from "../components/EducationComponent";
import HeadComponent from "../components/headComponent";
import SkillsTools from "../components/SkillsTools";
import Contact from "../components/Contact";


const DotComponent = () => {
  return (
    <div className="hidden sm:block w-4 h-4 bg-lighttxt dark:bg-darkbgc opacity-70 rounded-full"></div>
  );
};

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center sm:gap-8 p-4 min-h-screen">
      <aside className="w-full lg:w-auto">
        <HeadComponent />
      </aside>
      <main className="flex flex-col gap-2 max-w-3xl mt-8">
        <section className="flex justify-center sm:justify-start gap-2 items-center">
          
          <h2 className="font-simibold text-2xl text-center lg:text-start opacity-90">About</h2>
        </section>
        <p className="">An Aspiring Software Engineer with 2+ years of front-end development experience, now advancing towards becoming a Full-stack developer. I specialize in creating scalable web applications that deliver exceptional user experiences.</p>
        
        <section className="">
          <EducationComponent DotComponent={<DotComponent />} /> 
        </section>
        <section className="flex gap-2 items-center">
          <h2 className="font-simibold text-2xl text-center lg:text-start opacity-90">SKills/tools</h2>
        </section>
        <p className="">Primarily, I love developing ReactJS Apps and enjoy tuning performances for web-apps in general. Find below the skills, tools, and technologies I use:</p>
        <SkillsTools />
        <div className="flex gap-2 mt-2 items-center">
          <p>Want to know more about me? <a className="" href="/">Download CV</a></p>
        </div>
        <Contact />
      </main>
    </section>
  );
};

export default About;
