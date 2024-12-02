import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReturnButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="flex items-center justify-center rounded-full w-10 h-10 py-1"
      >
        <IoArrowBackCircleSharp className="text-4xl" />
      </Link>
    </div>
  );
};

export default ReturnButton;
