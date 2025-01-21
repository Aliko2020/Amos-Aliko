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
const EducationComponent = () => {
  return (
    <section className="flex flex-col">
        <section className="flex gap-2 items-center">
          
          <h2 className="font-semibold text-center lg:text-start opacity-90">Education</h2>
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
