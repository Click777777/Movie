import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex cursor-pointer items-center gap-5">
      <div className="font-meduium rounded-md bg-subMain px-3 py-2 text-xs text-white transition hover:text-main sm:text-sm lg:rounded-3xl lg:px-5">
        <div className="flex-rows gap-2">
          <p className=" text-[10px] lg:text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
