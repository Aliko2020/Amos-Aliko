import EducationComponent from "../components/EducationComponent";
import SkillsTools from "../components/SkillsTools";



const DotComponent = () => {
  return (
    <div className="hidden sm:block w-4 h-4 bg-lighttxt dark:bg-darkbgc opacity-70 rounded-full"></div>
  );
};

const About = () => {
  return (
      <section className="min-h-screen  flex justify-center items-center p-8 mt-8 sm:mt-0">
        <main className="flex flex-col gap-2 mt-8">
          <h1 className="text-lg font-semibold mb-2">~/About</h1>
          <p className="mb-8 max-w-6xl">An Aspiring Software Engineer with 2+ years of front-end development experience, now advancing towards becoming a Full-stack developer. I specialize in creating scalable web applications that deliver exceptional user experiences.</p>
          <section className="">
            <EducationComponent DotComponent={<DotComponent />} />
          </section>
          <section className="flex gap-2 items-center">
            <h2 className="text-lg font-simibold  text-center lg:text-start opacity-90">Skills/Tools</h2>
          </section>
          <p className="">Primarily, I love developing ReactJS Apps and enjoy tuning performances for web-apps in general. Find below the skills, tools, and technologies I use:</p>
          <SkillsTools />
          <div className="flex gap-2 mt-2 items-center">
            <p>Want to know more about me? <a className="" href="/">Download CV</a></p>
          </div>
        </main>
      </section>
  );
};

export default About;
