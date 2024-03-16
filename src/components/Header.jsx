import Logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import navpatten from "../assets/images/bg-pattern-mobile-nav.svg";
import { useState } from "react";
const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <header className="flex items-center justify-between p-5 px-10 mx-auto max-w-7xl">
      <img className="w-[118px] h-[12px]" src={Logo} alt="logo" />
      <img
        onClick={() => setopen(!open)}
        className="cursor-pointer w-[32px] h-[32px] md:hidden"
        src={hamburger}
        alt=""
      />
      <ul
        className={
          "absolute hidden  items-center  md:text-Dark-Grayish-Violet text-white md:static md:flex-row flex-col transition-all gap-5 font-semibold nav md:flex  " +
          (open
            ? "pt-10 !flex  !top-[70px] !left-0 !w-full !h-[calc(100vh-70px)] !bg-Very-Dark-Violet z-20"
            : " ")
        }
      >
        <li> How we work</li>
        <li> Blog</li>
        <li>Account</li>
        <li
          className={
            "border-2 border-dark-Violet   hover:bg-dark-Violet  " +
            (open
              ? "text-white  border-white w-[80%] text-center hover:bg-white hover:!text-black"
              : "hover:!text-white text-dark-Violet")
          }
        >
          {" "}
          View plans
        </li>
        <li className="absolute bottom-0 right-0 w-full !p-0">
          <img className=" w-[375px] h-[218px]" src={navpatten} alt="navpatten" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
