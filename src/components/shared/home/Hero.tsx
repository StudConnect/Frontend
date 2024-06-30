import { useNavigate } from 'react-router-dom';
import { ButtonBg } from '../buttons/Buttons';
import hero_image from "../../../assets/images/map_line.png"
import marker1 from "../../../assets/icons/marker_1.png"
import marker2 from "../../../assets/icons/marker_2.png"
import marker3 from "../../../assets/icons/marker_3.png"
import marker4 from "../../../assets/icons/marker_4.png"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      style={{ backgroundImage: `url(${hero_image})` }} className="w-full bg-cover bg-no-repeat bg-center md:px-14 px-2 z-10 bg-transparent relative">
        <img src={marker1} className='absolute left-96 top-20' alt={marker1} />
        <img src={marker2} className='absolute md:right-40 right-5 md:top-96 top-5' alt={marker2} />
        <img src={marker3} className='absolute left-20 bottom-20' alt={marker3} />
        <img src={marker4} className='absolute right-96 bottom-40' alt={marker4} />
      <section className="w-full flex h-[80vh] bg-image-container bg-fixed items-center justify-center">
        <section className="flex gap-y-7 md:w-3/4 w-full px-2 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-center text-white md:text-[56px] text-[26px]  capitalize"
          >
            Connecting Students Globally for Enhanced Learning
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-center text-neutral-300 text-[16px] md:text-xl md:leading-9"
          >
            Join a community of scholars worldwide. Collaborate, share knowledge, and grow together
          </p>
          <section className='w-fit mx-auto'>
            <ButtonBg className='px-12 py-5' onClick={function (): void {
              navigate("/register")
            }}>Join Community</ButtonBg>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Hero