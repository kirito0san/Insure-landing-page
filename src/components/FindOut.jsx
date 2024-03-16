import patternPc from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import patternMobile from "../assets/images/bg-pattern-how-we-work-mobile.svg";
const FindOut = () => {
  return (
    <div className="px-10 mx-auto bg-white max-w-7xl">
      <div className="relative flex flex-col items-center justify-between gap-10 py-10 overflow-hidden text-center text-white md:text-start md:flex-row md:p-14 bg-dark-Violet">
        <img className="absolute top-0 right-0 hidden md:block" src={patternPc} alt="" />
        <img className="absolute top-0 right-0 md:hidden" src={patternMobile} alt="" />
        <h3 className="text-4xl md:text-5xl font-DMSerif ">
          {" "}
          Find out more <br /> about how we work
        </h3>
        <button className="z-10 p-2 px-6 font-semibold text-white transition-all border-2 border-Very-Light-Gray hover:bg-white hover:text-dark-Violet ">
          {" "}
          How we work
        </button>
      </div>
    </div>
  );
};

export default FindOut;
