import React, { useState, useEffect } from "react";
import Logo from "../logo/Logo";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { ButtonBg } from "../buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import { RootState } from "../../../types/Interface";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/#about",
    },
    {
      text: "Features",
      link: "/#features",
    },
    {
      text: "FAQs",
      link: "/#faqs",
    },
  ];

  return (
    <>
      <header className="md:px-10 px-4 z-20 bg-transparent relative">
        <section className="flex items-center justify-between py-6">
          <section>
            <Logo />
          </section>
          <section className="hidden md:block">
            <ul className="flex flex-col md:flex-row md:relative items-center gap-14">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <RouterLink
                    className="text-base font-medium transition-all text-white"
                    to={navLink.link}
                    onClick={() => scrollToSection(navLink.link.substring(2))}
                  >
                    {navLink.text}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="hidden md:block">
            <ButtonBg
              className="px-6 py-3"
              onClick={() => navigate("/register")}
            >
              Get Started
            </ButtonBg>
          </section>
          <section className="md:hidden">
            <BsList
              onClick={onToggle}
              className="text-2xl cursor-pointer font-medium text-white z-30"
            />
          </section>
        </section>

        <section
          className={`fixed top-0 right-0 h-full p-4 w-full bg-dv text-white z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <section className="absolute top-6 right-6 z-30">
            <BsX
              onClick={onToggle}
              className="text-2xl cursor-pointer font-medium text-white"
            />
          </section>
          <ul className="flex flex-col items-center gap-14 mt-24">
            {navLinks.map((navLink, index) => (
              <li
                onClick={onToggle} key={index}>

                <RouterLink
                  className="text-base font-medium transition-all text-white"
                  to={navLink.link}
                  onClick={() => scrollToSection(navLink.link.substring(2))}
                >
                  {navLink.text}
                </RouterLink>
              </li>
            ))}
            <ButtonBg
              className="px-6 py-3 mt-4"
              onClick={() => {
                navigate("/register");
                onToggle(); // Close sidebar when button is clicked
              }}
            >
              Get Started
            </ButtonBg>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Navbar;
