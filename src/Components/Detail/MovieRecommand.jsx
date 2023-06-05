import React from "react";
import { Link } from "react-router-dom";

const MovieRecommand = ({ arrData }) => {
  return (
    <>
      {arrData ? (
        <div className="relative overflow-hidden rounded transition-all ">
          <div className="flex h-full flex-col justify-between">
            <Link
              to={`/anime/detail/${arrData.entry.mal_id}`}
              className=" movieHover w-full"
            >
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <div className=" relative overflow-hidden">
                    <img
                      src={arrData.entry.images.webp.large_image_url}
                      alt="imgErr"
                      className="h-[300px] max-w-[220px] cursor-pointer select-none rounded-md object-cover "
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-center py-4 px-2 ">
              <div className="max-w-[220px] !text-ellipsis text-xs text-white line-clamp-2 md:text-base">
                {arrData.entry.title}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieRecommand;
