import { education } from "../data";


const EducationComponent = () => {
  return (
    <section className="flex flex-col">
        <section className="flex gap-2 items-center">
          
          <h2 className="text-lg font-simibold lg:text-start opacity-90">Education</h2>
        </section>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 flex lg:gap-16 mt-4">
          <h3 className="">
            {edu.timeFrame.from} - {edu.timeFrame.to}
          </h3>
          <div>
            <h2 className="">{edu.title}</h2>
            <p className="">{edu.institution}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationComponent;
