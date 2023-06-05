import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieTR = ({ arrData }) => {
  const [inHover, setHover] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded transition-all "
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex h-full flex-col justify-between">
        <Link
          to={`/anime/detail/${arrData.mal_id}`}
          className=" movieHover w-full cursor-pointer"
        >
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <div className=" relative overflow-hidden">
                <img
                  src={arrData?.images?.webp.large_image_url}
                  alt="imgErr"
                  className=" h-[300px] max-w-[220px] select-none rounded-md object-cover "
                  onMouseEnter={() => setHover(true)}
                />
                {/* Ribbon  */}
                <div className="ribbon">
                  <span>{arrData.airing ? "on going" : "complete"}</span>
                </div>
                {/* type TV or Series */}
                <div className=" absolute top-0 right-0 rounded-l-sm bg-border px-2">
                  <span className="text-[10px] font-bold uppercase leading-5 shadow-md">
                    {arrData.type}
                  </span>
                </div>
              </div>
            </div>
            {inHover && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75 ">
                <p className=" flex h-40 select-none items-center justify-center text-xs font-light text-white xs:h-72 xs:text-base sm:h-60 md:h-64 lg:h-72 xl3:h-96 xl4:h-[28rem] ">
                  See More ...
                </p>
              </div>
            )}
          </div>
        </Link>
        <div className="flex items-center justify-center py-4 px-2 ">
          <div className="max-w-[220px] !text-ellipsis text-xs text-white line-clamp-2 md:text-base">
            {arrData.title_english
              ? arrData.title_english
              : arrData.title
              ? arrData.title
              : arrData.title_japanese}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTR;
