import React from "react";
import { Link } from "react-router-dom";

const MovieRecommand = ({ arrData }) => {
  return (
    <>
      {arrData ? (
        <div className="relative overflow-hidden rounded transition-all ">
          <div className=" relative cursor-pointer pb-[141%]">
            <Link to={`/anime/detail/${arrData.entry.mal_id}`}>
              <img
                src={arrData.entry.images.webp.large_image_url}
                alt="imgErr"
                className=" absolute h-full w-full object-cover "
              />
            </Link>
          </div>

          <div className="text-sm line-clamp-2 xs:text-base">
            {arrData.entry.title}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieRecommand;
