import hero from "assets/images/hero.png";
import dots from "assets/images/dots.png";
import cross from "assets/images/cross.png";
import circles from "assets/images/circles.png";

const HeroImage = () => {
  return (
    <div className="hidden lg:block absolute bottom-0 right-[50px]">
      <div className="relative w-fit">
        <img src={hero} alt="placeholder-pic" className="h-full w-full" />
        <img alt="placeholder-pic" className="absolute top-[10px] right-[14px]" src={dots} />
        <img alt="placeholder-pic" className="absolute top-[20%] left-[2px]" src={cross} />
        <img alt="placeholder-pic" className="absolute bottom-[20%] left-[1px]" src={circles} />
      </div>
    </div>
  );
};

export default HeroImage;
