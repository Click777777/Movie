import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFound = ({
  title = "opps! Page was not found",
  FristLine = "The page you are looking for doesn't exit .You may have ",
  RedLine = " mistyped  ",
  ThirdLine = "the",
  LastLine = "URl",
}) => {
  return (
    <div className=" w-full min-h-screen flex-colo gap-8 bg-main py-10 lg:py-20 px-6">
      <h1 className="  lg:text-4xl font-bold text-white capitalize">{title}</h1>
      <p className=" text-border font-medium leading-6 italic">
        {FristLine}
        <span className=" uppercase text-subMain font-medium leading-6">
          &nbsp;{RedLine}&nbsp;
        </span>
        {ThirdLine}
        <span className=" uppercase text-subMain font-medium leading-6">
          &nbsp;{LastLine}
        </span>
        .
      </p>
      <Link
        to="/"
        className=" bg-subMain text-white flex-rows gap-4 font-medium py-2 px-3 rounded hover:text-main transition-all "
      >
        <BiHomeAlt /> Back Home
      </Link>
    </div>
  );
};

export default NotFound;
