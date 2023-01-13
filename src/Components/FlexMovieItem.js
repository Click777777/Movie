import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdNotStarted } from "react-icons/md";
import { BiTime } from "react-icons/bi";

const FlexMovieItem = ({ type, duration, date, rating }) => {
  var fullDate = new Date(date);
  var movieDate = fullDate.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="hidden md:flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="flex gap-1">
          <MdNotStarted className="text-base pt-[1px]" />
          <span className="text-[14px] font-medium">{type}</span>
        </div>
        <div className="flex gap-1">
          <BiTime className="text-base pt-[1px]" />
          <span className="text-[14px] font-medium">{duration}</span>
        </div>
        <div className="flex gap-1">
          <MdOutlineDateRange className="text-base pt-[1px]" />
          <span className="text-[14px] font-medium">{movieDate}</span>
        </div>
      </div>
      <div className="flex gap-1">
        <BsStars className="text-base pt-[1px]" />
        <span className="text-[14px] font-medium">{rating}</span>
      </div>
    </div>
  );
};

export default FlexMovieItem;
