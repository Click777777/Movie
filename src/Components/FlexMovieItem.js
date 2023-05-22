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

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="flex gap-1 items-center">
          <MdNotStarted className="mb-1 text-base pt-[1px] text-subMain" />
          <span className="text-[14px] text-white text-opacity-90 font-medium">
            {type}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <BiTime className="mb-1 text-base pt-[1px] text-subMain" />
          <span className="text-[14px] text-white text-opacity-90 font-medium">
            {duration}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <MdOutlineDateRange className="mb-1 text-base pt-[1px] text-subMain" />
          <span className="text-[14px] text-white text-opacity-90 font-medium">
            {movieDate}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <div className={`flex gap-1 items-center ${ifnon}`}>
          <FaViadeo className="mb-1 text-base pt-[1px] text-subMain" />
          <span className="text-[14px] text-white text-opacity-90 font-medium">
            {rating}
          </span>
        </div>

        <div className={`flex gap-1 items-center ${ifnon}`}>
          <BsStars className="mb-1 text-base pt-[1px] text-subMain" />
          <span className="text-[14px] text-white text-opacity-90 font-medium">
            {score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlexMovieItem;
