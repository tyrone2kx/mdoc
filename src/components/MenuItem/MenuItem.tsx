import { ChevronDownIcon } from "assets/icons";
import React from "react";

interface IProps {
  title: string;
  isDropdown?: boolean;
}

const MenuItem = ({ title, isDropdown }: IProps) => {
  return (
    <div className="mr-8 flex items-center">
      <p>{title}</p>
      {isDropdown && <div className="ml-2"><ChevronDownIcon /></div>}
    </div>
  );
};

export default MenuItem;
