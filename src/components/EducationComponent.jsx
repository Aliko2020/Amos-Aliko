
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
        <h2 className="font-semibold">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 flex gap-6 lg:gap-16 mt-4 text-sm">
            <h3 className="">
              {edu.timeFrame.from} - {edu.timeFrame.to}
            </h3>
            <div>
              <h2 className="font-semibold">{edu.title}</h2>
              <p className="italic">{edu.institution}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default EducationComponent;
  