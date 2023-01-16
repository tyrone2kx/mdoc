import React from "react";

interface IProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: IProps) => {
  return (
    <div
      className={"rounded-[20px] w-[347px] p-12 py-[100px] my-8 "}
      style={{
        background: "rgba(72, 181, 99, 0.05)",
        border: "1px solid rgba(54, 137, 74, 0.1)",
        boxShadow:
          "inset 23.9333px -23.9333px 23.9333px rgba(163, 166, 168, 0.1), inset -23.9333px 23.9333px 23.9333px rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(23.9333px)",
      }}
    >
      <p className="text-primary text-[24px] mb-4">{title}</p>
      <p className="text-darkBlue">{description}</p>
    </div>
  );
};

export default Card;
