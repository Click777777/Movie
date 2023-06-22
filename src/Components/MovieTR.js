import React from "react";
import { Link } from "react-router-dom";

const MovieTR = ({ arrData }) => {
  return (
    <div className="relative overflow-hidden rounded transition-all ">
      <div className=" relative cursor-pointer pb-[141%]">
        <Link to={`/anime/detail/${arrData.mal_id}`}>
          <img
            src={arrData?.images?.webp.large_image_url}
            alt="imgErr"
            className=" absolute h-full w-full object-cover "
          />
        </Link>
      </div>

      {/* Ribbon  */}
      <div className="ribbon">
        <span className=" text-[7px] xs:text-[8px]">{arrData.status}</span>
      </div>
      {/* type TV or Series */}
      <div className=" absolute top-0 right-0 rounded-l-sm bg-border px-2">
        <span className="text-[10px] font-bold uppercase leading-5 shadow-md">
          {arrData.type}
        </span>
      </div>

      <div className="text-sm line-clamp-2 xs:text-base">
        {arrData.title_english
          ? arrData.title_english
          : arrData.title
          ? arrData.title
          : arrData.title_japanese}
      </div>
    </div>
  );
};

export default MovieTR;
