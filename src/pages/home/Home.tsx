import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "../../components/shared/navbar/Navbar";
import Hero from "../../components/shared/home/Hero";
import Features from "../../components/shared/home/Features";
import Howitworks from "../../components/shared/home/Howitworks";
import Getstarted from "../../components/shared/home/Getstarted";
import Footer from "../../components/shared/home/Footer";

const Home = () => {
    // const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            console.log(true);
            
            // setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#0A0C25",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    // direction: MoveDirection.none,
                    enable: true,
                    // outModes: {
                    //     // default: OutMode.out,
                    // },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );
    return (
        <section className="relative w-full">
            <Navbar />
            <Hero />
            <Features/>
            <Howitworks/>
            <Getstarted/>
            <Footer/>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
            <section>

            </section>
        </section>
    )
}

export default Home