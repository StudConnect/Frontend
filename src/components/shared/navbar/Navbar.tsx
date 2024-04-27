import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { ButtonBg } from "../buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import { RootState } from "../../../types/Interface";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  console.log(sidenav)
  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
  };
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/",
    },
    {
      text: "FAQs",
      link: "/",
    },
  ];
  return (
    <>
      <header className="md:px-10 px-4 z-10 bg-transparent relative">
        <section className="flex items-center justify-between py-6">
          <section>
            <Logo color={"white"} />
          </section>
          <section className="hidden md:block">
            <ul className="flex items-center gap-14">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link
                    className="text-base font-medium transition-all text-white"
                    to={navLink.link}
                  >
                    {navLink.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="hidden md:block">
            <ButtonBg className="px-3 py-2" onClick={function (): void {
              throw new Error("Function not implemented.");
            }}>Join Community</ButtonBg>
          </section>
          <section className="md:hidden">
            <BsList
              onClick={onToggle}
              className="text-2xl cursor-pointer font-medium text-white"
            />
          </section>
        </section>

        {/* <SideNav /> */}
      </header>
    </>
  );
};

export default Navbar;
