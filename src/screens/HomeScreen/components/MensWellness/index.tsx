import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import React from "react";
import menwellness from 'assets/images/menwellness.png'

const MensWellness = () => {
  return (
    <section className="bg-offwhite px-12  pt-12 pb-[50px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-around w-full 2xl:w-[70%]">
      <div className="w-full md:w-[60%] lg:w-[50%]">
        <h2 className="text-darkBlue text-[28px] lg:text-[38px] font-bold mb-6">
          Our <span className="text-primary">men's wellness</span> program
          enables you manage your health properly
        </h2>
        <p className="text-darkBlue">
          We are driven to help you achieve your health goals with our
          scientifically proven approach to providing quality health care for
          men.
        </p>

        <div className="flex mt-10 items-center">
          <PrimaryButton>Sign Up</PrimaryButton>

          <p className="ml-4">Check Plans {">"}</p>
        </div>
      </div>

      <div className="mt-10 md:mt-0 w-full md:w-[40%] flex justify-center">
        <img  alt="placeholder-pic" src={menwellness} className='max-w-full' />
      </div>

      </div>
    </section>
  );
};

export default MensWellness;
