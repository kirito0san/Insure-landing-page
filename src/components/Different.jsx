import snappy from "../assets/images/icon-snappy-process.svg";
import Affordable from "../assets/images/icon-affordable-prices.svg";
import People from "../assets/images/icon-people-first.svg";
import DifferentPart from "./DifferentPart";

const Different = () => {
  return (
    <div className="flex flex-col items-center px-10 py-[80px]  md:py-10 mx-auto bg-white md:items-start max-w-7xl">
      <hr className="w-[147px] mb-10 border-dark-Violet" />
      <h2 className="text-4xl md:text-6xl font-DMSerif"> We’re different</h2>
      <div className="flex flex-col items-center gap-10 py-10 serves md:flex-row">
        <DifferentPart
          DifferentImg={snappy}
          firstP={"Snappy Process"}
          secondP={
            "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
          }
        />
        <DifferentPart
          DifferentImg={Affordable}
          firstP={"Affordable Prices"}
          secondP={
            "We don’t want you worrying about high monthly costs. Our prices may be low, but we stilloffer the best coverage possible."
          }
        />
        <DifferentPart
          DifferentImg={People}
          firstP={"People First"}
          secondP={
            "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’recovered when you need it."
          }
        />
      </div>
    </div>
  );
};

export default Different;
