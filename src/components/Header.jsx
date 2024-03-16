import Logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
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
          "hidden transition-all gap-5 font-semibold nav md:flex  " +
          (open
            ? "!flex !absolute !flex-col text-white pt-10 items-center !top-[70px] !left-0 !w-full !h-[100vh] !bg-Very-Dark-Violet z-20"
            : "text-Dark-Grayish-Violet")
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
      </ul>
    </header>
  );
};

export default Header;
