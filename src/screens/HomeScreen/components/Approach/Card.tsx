import React from "react";

interface IProps {
  icon: any;
  text: any;
}

const Card = ({ icon, text }: IProps) => {
  return (
    <div
      className="rounded-lg p-8 pb-12 w-[305px] mb-8 md:mb-0"
      style={{
        background: "rgba(71, 180, 98, 0.04)",
        border: "1px solid rgba(71, 180, 98, 0.1)",
        boxShadow:
          "inset 23.9333px -23.9333px 23.9333px rgba(163, 166, 168, 0.1), inset -23.9333px 23.9333px 23.9333px rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(23.9333px)",
      }}
    >
      <div className="my-8">{icon}</div>
      <p className="mb-10">{text}</p>
    </div>
  );
};

export default Card;
