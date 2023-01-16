import React from "react";

interface IProps {
    children: any;
    className?: string;
}

const PrimaryButton = ({ children, className }: IProps) => {
  return (
    <button className={`bg-primary text-white rounded-lg px-5 py-[7px] text-base ${className || ""}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
