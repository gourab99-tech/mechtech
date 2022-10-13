import React from "react";
import { FaUserSlash } from "react-icons/fa";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-4xl">
        <FaUserSlash />
      </p>
      <p className="text-1xl text-center mt-5">{text}</p>
    </div>
  );
};

export default NoResults;
