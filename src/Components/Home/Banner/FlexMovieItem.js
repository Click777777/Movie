import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdNotStarted } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { FaViadeo } from "react-icons/fa";

const FlexMovieItem = ({ type, duration, date, rating, score }) => {
  var fullDate = new Date(date);
  var movieDate = fullDate.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const ifnon = rating === undefined ? "hidden" : "";
  const notScore = !score ? "hidden" : "";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-6">
        <div className="flex flex-wrap items-center gap-1">
          <MdNotStarted className="h-[15px] w-[15px] text-base" />
          <span className="text-[14px] font-medium text-white text-opacity-90">
            {type}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <BiTime className="h-[15px] w-[15px] text-base" />
          <span className="text-[14px] font-medium text-white text-opacity-90">
            {duration}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <MdOutlineDateRange className="h-[15px] w-[15px] text-base" />
          <span className="text-[14px] font-medium text-white text-opacity-90">
            {movieDate}
          </span>
        </div>
      </div>

      <div className="flex gap-6">
        <div className={`flex items-center gap-1 ${ifnon} flex-wrap`}>
          <FaViadeo className="h-[15px] w-[15px] text-base" />
          <span className="text-[14px] font-medium text-white text-opacity-90">
            {rating}
          </span>
        </div>

        <div className={`flex items-center gap-1 ${notScore} flex-wrap`}>
          <BsStars className="h-[15px] w-[15px] text-base" />
          <span className="text-[14px] font-medium text-white text-opacity-90">
            {score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlexMovieItem;
