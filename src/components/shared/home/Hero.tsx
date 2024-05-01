import { useNavigate } from 'react-router-dom';
import { ButtonBg } from '../buttons/Buttons';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full md:px-10 px-4 z-10 bg-transparent relative">
      <section className="w-full flex h-[80vh] bg-image-container bg-cover bg-fixed items-center justify-center">
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
            <ButtonBg className='px-10 py-3' onClick={function (): void {
              navigate("/register")
            }}>Join Community</ButtonBg>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Hero