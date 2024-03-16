import MainImageM from "../assets/images/image-intro-mobile.webp";
import MainImageP from "../assets/images/image-intro-desktop.webp";
import patternM from "../assets/images/bg-pattern-intro-right-mobile.svg";
import patternLM from "../assets/images/bg-pattern-intro-left-mobile.svg";

const Humanizing = () => {
  return (
    <div className="flex  flex-col-reverse mx-auto md:py-10 md:pb-[200px]  md:flex-row text-Very-Light-Gray max-w-7xl">
      <div className="relative flex flex-col  items-center px-2 text-center py-[80px] md:py-5 md:items-start md:text-start md:px-10">
        <img className="absolute top-[65%] right-0 md:hidden " src={patternM} alt="patternM" />
        <img className="absolute top-[0] -left-0 md:hidden" src={patternLM} alt="patternLM" />
        <hr className="hidden w-[147px] mb-10 md:block" />
        <h1 className="z-10 text-5xl md:text-6xl font-DMSerif">
          Humanizing <br /> your insurance.
        </h1>
        <p className="py-5 max-w-[400px] md:max-w-[588px] ">
          Get your life insurance coverage easier and faster. We blend our expertise and technology
          to help you find the plan that’s right for you. Ensure you and your loved ones are
          protected.
        </p>
        <button className="p-2 px-6 font-semibold text-white transition-all border-2 border-Very-Light-Gray hover:bg-white hover:text-dark-Violet ">
          View plans
        </button>
      </div>
      <img className="w-[540px] h-[650px] hidden md:block" src={MainImageP} alt="MainImageP" />
      <img
        className="w-[375px] self-center h-[451px] md:hidden"
        src={MainImageM}
        alt="MainImageM"
      />
    </div>
  );
};

export default Humanizing;
