import React from "react";

const Head = ({ title, image }) => {
  return (
    <div className="relative w-full lg:h-96 rounded-md overflow-hidden  ">
      <img
        src={image}
        alt="err"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute top-0 bottom-0 flex-colo w-full ">
        <h1 className="text-white font-bold text-2xl lg:text-h1 text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Head;
