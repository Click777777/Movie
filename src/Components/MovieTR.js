import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { Link } from "react-router-dom";

const MovieTR = ({ arrData }) => {
  console.log(arrData);
  const [inHover, setHover] = useState(false);

  return (
    <div
      className="border border-border  transition-all relative rounded overflow-hidden "
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col justify-between h-full">
        <div className=" w-full movieHover">
          <Link to={`/movies/${arrData.mal_id}`} className="relative">
            <img
              src={arrData.images.webp.large_image_url}
              alt="imgErr"
              className="w-full object-cover h-40 xs:h-72 sm:h-60 md:h-64 lg:h-72 xl3:h-96 xl4:h-[28rem] select-none"
              onMouseEnter={() => setHover(true)}
            />
            {inHover && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75 ">
                <p className=" select-none flex justify-center items-center h-60 xs:h-72 sm:h-60 md:h-64 lg:h-72 xl:h-80 2xl:h-96 text-xs xs:text-base font-light text-white">
                  See More ...
                </p>
              </div>
            )}
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-auto py-4 px-2 h-24 md:h-28">
          <div className="text-white text-xs md:text-base line-clamp-2 !text-ellipsis">
            {arrData.title_english
              ? arrData.title_english
              : arrData.title
              ? arrData.title
              : arrData.title_japanese}
          </div>
          <div className="flex justify-between mt-1 select-none">
            <div className="flex space-x-2 items-start ">
              <BsStars className="text-base text-subMain" />
              <p className="text-sm">{arrData.score}</p>
            </div>
            <div className="flex space-x-2 items-center  ">
              <GiSandsOfTime className=" text-sm md:text-base text-subMain mb-1" />
              <p className="text-sm">{arrData.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTR;
