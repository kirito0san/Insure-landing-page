const DifferentPart = ({ DifferentImg, firstP, secondP }) => {
  return (
    <div>
      <img className="w-[86px] h-[86px]" src={DifferentImg} alt="differentpart" />
      <p>{firstP}</p>
      <p>{secondP}</p>
    </div>
  );
};

export default DifferentPart;
