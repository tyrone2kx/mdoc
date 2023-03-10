import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import React from "react";
import phone from "assets/images/phone.png";
import { AppleIcon, GooglePlayIcon } from "assets/icons";

const SelfSupport = () => {
  return (
    <section className="bg-white px-12  py-[150px] flex justify-center items-center ">
      <div className="flex flex-col md:flex-row items-center justify-center w-full 2xl:w-[70%] ">
        <div className="w-full md:w-[50%] lg:w-[30%]">
          <h2 className="text-darkBlue text-[28px] lg:text-[38px] font-bold mb-6">
            <span className="text-primary">Self-care</span> support on the go!
            (Coming soon)
          </h2>
          <p className="text-darkBlue">
            Download the mDoc CompleteHealthâ„¢ app to access our premium virtual
            self-care support packages.
          </p>

          <div className="flex mt-10 items-center">
            <div className="flex p-2 items-center border rounded-lg px-4 cursor-pointer">
              <div>
                <GooglePlayIcon />
              </div>

              <p className="ml-2">Get on Android</p>
            </div>

            <div className="flex p-2 items-center border rounded-lg px-4 cursor-pointer ml-4">
              <div>
                <AppleIcon />
              </div>

              <p className="ml-2">Get on iPhone</p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-8 w-full md:w-[50%] flex justify-center ">
          <img alt="placeholder-pic" className="max-w-full" src={phone} />
        </div>
      </div>
    </section>
  );
};

export default SelfSupport;
