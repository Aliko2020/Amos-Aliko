import EducationComponent from "../components/EducationComponent"
import HeadComponent from "../components/headComponent"


const About = () => {
  return (
    <section className="flex flex-col gap-4 p-4 md:flex-row">
      <div className="flex flex-col gap-4 max-w-2xl">
       <div>
       <h2 className="font-semibold">About</h2>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias laboriosam, ea at dolorum, rerum asperiores sunt odio repellendus aperiam saepe! Voluptatibus dicta exercitationem vel atque nemo quasi doloremque vitae.</p>
       </div>
       <EducationComponent />
      </div>


      <div>
       <h2 className="font-semibold">Skills and Expertise</h2>
      </div>
      
    </section>
  )
}

export default About