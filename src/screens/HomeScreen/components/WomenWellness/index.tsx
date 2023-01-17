import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import React from "react";
import womenwellness from "assets/images/womenwellness.png";

const WomenWellness = () => {
  return (
    <section className="bg-offwhite px-12 pb-[150px]  pt-12 flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-full 2xl:w-[70%]">
      <div className="mt-10 md:mt-0 w-full md:w-[40%] flex justify-center">
        <img  alt="placeholder-pic" src={womenwellness} className='max-w-full' />
      </div>
      <div className="w-full md:w-[55%] lg:w-[50%]">
        <h2 className="text-darkBlue text-[28px] lg:text-[38px] font-bold mb-6">
          Our <span className="text-primary">women's wellness</span> program
          enables you manage your health properly
        </h2>
        <p className="text-darkBlue">
          We support women of reproductive age to reduce maternal morbidity and
          mortality, and ultimately improve maternal health outcomes.
        </p>

        <div className="flex mt-10 items-center">
          <PrimaryButton>Sign Up</PrimaryButton>

          <p className="ml-4">Check Plans {">"}</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WomenWellness;
