import { FaExternalLinkAlt } from "react-icons/fa";


const education = [
    {
      title: "Bachelor of Technology (B-Tech) In Computer Science",
      institution: "Sunyani Technical University",
      timeFrame: {
        from: "Jan 2024",
        to: "Nov 2025",
      },
    },
    {
      title: "Higher National Diploma (HND) Computer Science",
      institution: "Sunyani Technical University",
      timeFrame: {
        from: "Jan 2021",
        to: "Nov 2023",
      },
    },
  ];
  const professionalEx = [
    {
      title: "Frontend Development,FASHION Remote",
      jobRole: "Utilized HTML, CSS, JavaScript, and React to build responsive, interactive web components, ensuring cross-platform compatibility, and collaborated with other developers to integrate features seamlessly", 
      timeFrame: {
        from: "May 2024",
        to: "present",
      },
    },
  ];
  
  const EducationComponent = () => {
    return (
      <section className="flex flex-col">
        <h2 className="font-semibold">Educational Background</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 flex gap-6 mt-4">
            <h3 className="">
              {edu.timeFrame.from} - {edu.timeFrame.to}
            </h3>
            <div>
              <h2 className="">{edu.title}</h2>
              <p>{edu.institution}</p>
            </div>
          </div>
        ))}
  
        <h2 className="font-semibold">Professional Background</h2>
        {professionalEx.map((exp, index) => (
          <div key={index} className="mb-4 flex gap-6">
            <a className="sm:min-w-[160px]">
              {exp.timeFrame.from} - {exp.timeFrame.to}
            </a>
            <div>
              <a 
                className="flex gap-1"
                href="https://fashion-design-site.vercel.app/"
                target="_blank"
              >{exp.title}
                <FaExternalLinkAlt size={10}/>
              </a>
              <p>{exp.jobRole}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default EducationComponent;
  