import { Link } from "react-router-dom";
import LogoImage from "../../../assets/images/sc-black-removebg-cr.png"

type LogoTypes = {
  color: string
}

const Logo = (props: LogoTypes) => {
  return (
    <>
      <section className="w-[60px]">
        <Link to={"/"}>
          <img className="w-full" src={LogoImage} alt={LogoImage} /></Link>
      </section>
    </>
  );
};

export default Logo;
