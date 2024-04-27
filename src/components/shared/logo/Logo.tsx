type LogoTypes = {
  color: string
}

const Logo = (props: LogoTypes) => {
  return (
    <>
      <section>
        <span className={`text-2xl text-${props.color} font-bold`}>StudConnect</span>
      </section>
    </>
  );
};

export default Logo;
