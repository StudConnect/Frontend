import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const iconStyles = "text-4xl text-white"
  return (
    <section className="relative z-10 py-24 bg-dvblue flex justify-center md:px-14 px-2">
      <section className="">
        <section className="flex justify-center mb-8">
          <Logo color="white" />
        </section>
        <section className="flex justify-center gap-5 mb-8">
          <Link to={"/"}>
            <FaFacebook className={iconStyles} />
          </Link>
          <Link to={"/"}>
            <FaInstagram className={iconStyles} />
          </Link>
          <Link to={"/"}>
            <FaDiscord className={iconStyles} />
          </Link>
          <Link to={"/"}>
            <FaTwitter className={iconStyles} />
          </Link>
        </section>
        <p className="text-sm text-center text-[#5E676C]">
          © 2024 StudConnect. All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
