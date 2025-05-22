import { skills } from "../data";


const SkillsTools = () => {
  return (
    <section className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-4 lg:mt-1 rounded-lg">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col justify-center border border-opacity-20  dark:border-none dark:border-opacity-50 dark:bg-darkbg p-2 items-center rounded-lg mt-4 hover:border hover:border-gray-200 dark:hover:border-gray-400">
          <img src={skill.image} alt={skill.name} className="w-6 h-6 mb-2" />
          <h3 className=''>{skill.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default SkillsTools;
