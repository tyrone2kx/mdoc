import React from "react";
import gift from "assets/images/perfect-gift.png";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";

const PerfectGift = () => {
  return (
    <section className="bg-darkBlue flex">
      <div className="hidden md:block w-[50%]">
        <img  alt="placeholder-pic" className="md:h-full lg:h-auto" src={gift} />
      </div>
      <div className="w-full md:w-[50%] p-8 lg:p-12 bg-darkBlue flex flex-col justify-center">
        <h2 className="text-white text-[28px] lg:text-[38px] font-bold mb-6">
          What's the <span className="text-primary">perfect gift</span> for your loved one?
        </h2>
        <p className="text-white 2xl:w-[60%]">
          Gift a CompleteHealth™ (self-care support) subscription to those
          special people. Show love in a way that speaks to the wellbeing of
          your loved ones.
        </p>

        <div className="flex mt-10 items-center">
          <PrimaryButton>Gift friends/family</PrimaryButton>

          <p className="ml-4 text-primary">Check benefits {">"}</p>
        </div>
      </div>
    </section>
  );
};

export default PerfectGift;
