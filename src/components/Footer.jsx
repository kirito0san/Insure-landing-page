import Logo from "../assets/images/logo.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import FooterPart from "./FooterPart";
import FooterPatternD from "../assets/images/bg-pattern-footer-desktop.svg";
import FooterPatternM from "../assets/images/bg-pattern-footer-mobile.svg";
const Footer = () => {
  return (
    <div className="relative mt-14 py-[90px] bg-Very-Light-Gray">
      <img className="absolute top-0 left-0 hidden md:block" src={FooterPatternD} alt="" />
      <img className="absolute top-0 left-0 md:hidden" src={FooterPatternM} alt="" />
      <div className="flex flex-col px-10 mx-auto max-w-7xl">
        <div className="z-10 flex flex-col items-center justify-between gap-8 pb-5 border-b md:flex-row">
          <img className="w-[118px] h-[12px]" src={Logo} alt="logo" />
          <div className="flex gap-3 social">
            <img className="w-[24px] h-[24px]" src={facebook} alt="facebook" />
            <img className="w-[24px] h-[24px]" src={twitter} alt="twitter" />
            <img className="w-[24px] h-[24px]" src={pinterest} alt="pinterest" />
            <img className="w-[24px] h-[24px]" src={instagram} alt="instagram" />
          </div>
        </div>
        <FooterPart />
      </div>
    </div>
  );
};

export default Footer;
