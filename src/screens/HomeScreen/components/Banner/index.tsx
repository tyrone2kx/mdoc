import React from "react";

const Banner = () => {
  return (
    <section className="bg-offwhite p-12 py-[70px]">
      <h3 className="font-bold text-darkBlue text-center text-[26px] lg:text-[36px]">
        You can get onboarded on our CompleteHealth™ platform using USSD
      </h3>
      <p className="text-darkBlue text-center text-[18px] lg:text-[22px] mt-2">
        Don’t have internet access? using a basic phone? Not a problem! You can
        now access our CompleteHealth™ services through our USSD code:
      </p>
      <p className="text-primary text-[50px] text-center mt-8">
        <b>*347*339#</b>
      </p>
    </section>
  );
};

export default Banner;
