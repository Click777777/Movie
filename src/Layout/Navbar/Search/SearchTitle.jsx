import React from "react";

const SearchTitle = ({ Icon, title, name }) => {
  return (
    <div className="flex w-full items-center gap-2 sm:gap-4">
      <Icon className="h-4 w-4 text-subMain sm:h-6 sm:w-6" />
      <h2 className="text-sm font-semibold capitalize tracking-wider sm:text-xl">
        {title} <span className=" text-sm font-light text-star">{name}</span>
      </h2>
    </div>
  );
};

export default SearchTitle;
