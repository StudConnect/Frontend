import { useNavigate } from "react-router-dom"
import { FaUsers } from "react-icons/fa"
import { MdConnectWithoutContact } from "react-icons/md"
import { ButtonBg } from "../buttons/Buttons"
import { GoPasskeyFill } from "react-icons/go"

const About = () => {
  const iconStyles = "text-2xl md:text-4xl text-para"
  const steps = [
    {
      icon: <GoPasskeyFill className={iconStyles} />,
      title: "Unlock Opportunities",                                                                    
      descrip: "At StudConnect, we believe in the power of connections. Our platform offers numerous opportunities for students to discover internships, scholarships, and job openings. By networking with peers and professionals, you can open doors to new possibilities."
    },
    {
      icon: <MdConnectWithoutContact className={iconStyles} />,
      title: "Enhance Your Learning",
      descrip: "StudConnect is more than just a social network. It's a space for academic growth. Engage in discussions, join study groups, and access a wealth of educational resources. Whether you're preparing for exams or working on a research project, StudConnect is here to support you."
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "Find Mentors and Guides",
      descrip: "Navigating the academic and professional world can be challenging. That's why we connect you with mentors who can provide guidance and support. Learn from experienced professionals and gain insights that can help you make informed decisions about your future."
    },
  ]
  const navigate = useNavigate()
  return (
    <section id="about" className="relative z-10 bg-dv py-20 md:px-14 px-2">
      <section className="w-full flex flex-col md:flex-row gap-10 items-center">
        <section className="w-full md:w-1/2">
          <h3 className="text-white font-medium text-lg md:text-xl mb-3 text-center md:text-left">About Us</h3>
          <h2 className="text-white font-medium text-3xl md:text-4xl mb-8 text-center md:text-left">Why Join StudConnect?</h2>
          <p className="text-para text-center md:text-left text-sm md:text-lg font-medium mb-8">StudConnect is a dedicated platform designed to unite students from around the world. Our mission is to create a vibrant community where learners can connect, collaborate, and grow together. By providing access to mentors, resources, and a supportive network, we aim to empower students to reach their full potential.</p>
          <section className="w-full flex justify-center md:justify-start">
            <section className='w-fit'>
              <ButtonBg className='px-10 py-3' onClick={function (): void {
                navigate("/register")
              }}>Join Community</ButtonBg>
            </section>
          </section>
        </section>
        <section className="w-full md:w-1/2">

          <section className="flex flex-col gap-10">
            {steps.map((step) => (
              <section className="flex flex-col md:flex-row gap-4">
                <section className="w-full flex flex-row md:flex-col justify-center">
                  <section className="bg-[#6f79832b]  w-fit p-3 md:p-5  justify-center flex items-center rounded-full">{step.icon}</section>
                </section>
                <section className="flex flex-col gap-3">
                  <h3 className="text-center md:text-left text-white text-xs md:text-xl font-semibold">{step.title}</h3>
                  <p className="text-para text-center md:text-left text-xs md:text-sm font-medium">{step.descrip}</p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  )
}

export default About