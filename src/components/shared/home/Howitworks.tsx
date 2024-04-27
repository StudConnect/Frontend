import { FaUserPlus, FaUsers } from "react-icons/fa"
import bgimage from "../../../assets/images/full.jpg"
import { MdConnectWithoutContact } from "react-icons/md"

const Howitworks = () => {
  const iconStyles = "text-4xl text-lgreen"
  const steps = [
    {
      icon: <FaUserPlus className={iconStyles} />,
      title: "Sign Up",
      descrip: "Create your account in minutes using your email and basic details"
    },
    {
      icon: <MdConnectWithoutContact className={iconStyles} />,
      title: "Connect",
      descrip: "Explore and connect with students worldwide based on your field of study"
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "Collaborate",
      descrip: "Use our collaborative tools to work on projects, share insights, and learn together"
    },
  ]
  return (
    <section className="relative z-10 py-20 px-6">
      <section className="w-full lg:flex gap-20 items-center">
        <section className="w-full hidden lg:flex lg:w-1/2">
          <img src={bgimage} alt={bgimage} />
        </section>
        <section className="w-full lg:w-1/2">
          <section className="px-4 text-center lg:text-left">
            <span className="uppercase text-white text-base font-medium tracking-widest">HOW IT WORKS</span>
            <h1
              data-aos="fade-up" 
              data-aos-delay="500"
              className="mt-2 text-white md:text-[46px] text-[26px] font-semibold mb-8 capitalize"
            >Let's Dive In!!</h1>
            <section className="flex flex-col gap-10">
              {steps.map((step) => (
                <section className="flex gap-3">
                  <section>{step.icon}</section>
                  <section className="flex flex-col gap-3">
                    <h3 className="text-left text-white text-xl font-semibold">{step.title}</h3>
                    <p className="text-para text-left text-lg font-medium">{step.descrip}</p>
                  </section>
                </section>
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Howitworks