import React from "react";
import ListItem from "./ListItem";
import pic from "assets/images/subscribe.png";
import satisfaction from "assets/images/satisfaction.png";
import Underline from "./Underline";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";

const Subscribe = () => {
  return (
    <section className="px-12 py-[150px] flex justify-center">
      <div className="w-full 2xl:w-[80%] flex flex-col md:flex-row justify-between ">
        <div className="md:block w-full md:w-[60%] 2xl:w-[40%] mb-10 md:mb-0">
          <div className="relative w-fit">
            <img alt="placeholder-pic" src={pic} />
            <div className="absolute bottom-[-30px] right-[-20px] md:bottom-[-50px] md:right-[-40px] h-[120px]">
              <img alt="placeholder-pic" src={satisfaction} className="h-full w-full" />
            </div>
          </div>
          <div className="mt-8">
            <ListItem description={"Access to the CompleteHealth Platform"} />
            <ListItem description={"Consultation with a Health Coach"} />
            <ListItem
              description={"Weekly online/in-person virtual exercise class"}
            />
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <h2 className="text-[28px] md:text-[38px] text-darkBlue font-bold md:max-w-[90%]">
            Subscribe for our{" "}
            <span className="text-primary">self-care plans</span> for your
            personal and employee health need
          </h2>
          <Underline />

          <p className="text-darkBlue font-bold text-[22px] mb-8">
            How it works
          </p>

          <div className="mb-8">
            <ListItem isCheckmark description="Sign Up" />
            <ListItem isCheckmark description="Create your profile" />
            <ListItem isCheckmark description="Connect with your care team" />
          </div>

          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
