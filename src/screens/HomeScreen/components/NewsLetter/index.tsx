import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import React from "react";

const NewsLetter = () => {
  return (
    <section className="p-12 py-[100px]">
      <h3 className="text-darkBlue text-center text-[26px] font-bold ">
        Subscribe to our newsletter
      </h3>

      <div className="flex justify-center my-10">
        <input
        className="p-2 px-4 rounded mr-2 md:mr-6"
        placeholder="Email"
          style={{
            background: "rgba(57, 75, 89, 0.2)",
            opacity: 0.5,
          }}
        />
        <PrimaryButton className="px-8 text-lg" >Subscribe</PrimaryButton>
      </div>
    </section>
  );
};

export default NewsLetter;
