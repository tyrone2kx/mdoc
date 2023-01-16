import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import Stats from "./Stats";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section>
      <section className="px-12 pt-12 2xl:px-36 pb-10 bg-lightGreen">
        <div className="mb-8 md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%]">
          <h1 className="text-darkBlue text-[32px] md:text-[72px] font-bold">
            Your <span className="text-primary">health in your hands</span>.
            Anytime, anywhere!
          </h1>

          <p className="mt-4 mb-8 text-[20px] text-darkBlue">
            We provide integrated self-care support to people living with
            chronic conditions as well as those seeking to improve their general
            health.
          </p>

          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </section>

      <section className="px-12 2xl:px-36 pt-8 pb-10 bg-darkBlue flex relative  overflow-x-scroll md:overflow-visible space-x-12 md:space-x-2 snap-x snap-mandatory">
        <Stats description="Members" statistics="65,000+" />
        <Stats description="Lives Improved" statistics="9 Million+" />
        <Stats description="Healthcare workers trained" statistics="6500+" />
        <Stats description="Number of interactions" statistics="30 Million+" />
        <HeroImage />
      </section>
    </section>
  );
};

export default Hero;
