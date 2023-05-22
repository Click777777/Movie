import React from "react";
import FlexMovieItem from "./FlexMovieItem";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieInfo = ({ singleMovie, myPath }) => {
  const checkAired = singleMovie?.rank && singleMovie?.score ? "mb-16" : "mb-0";
  return (
    <>
      (
      <div className={`min-h-screen w-full ${checkAired} relative pt-[16px]`}>
        {/* Background Img */}
        <img
          src={singleMovie?.trailer.images.maximum_image_url}
          alt=""
          className=" h-screen w-full object-cover hidden xl:inline-block"
        />
        <div className="bg-dry flex flex-col justify-center items-center xl:bg-opacity-90 xl:absolute top-0 bottom-0 left-0 right-0 xl:bg-main  ">
          <div className="container mx-auto px-3 py-10 flex flex-col justify-center items-center gap-8 lg:py-20 2xl:px-32 xl:grid grid-cols-3 ">
            {/* Img Section */}
            <div className=" hidden lg:inline-block w-full order-none h-96 md:h-header bg-transparent  border-gray-800 rounded-lg overflow-hidden xl:col-span-1 xl:order-last ">
              <img
                src={singleMovie?.images.webp.large_image_url}
                className="h-full object-contain w-full"
                alt=""
              />
            </div>

            {/* Descriptin & Download */}
            <div className=" col-span-2 grid-cols-5 gap-4 items-center md:grid">
              {/*Movie Description */}
              <div className=" col-span-3 flex flex-col gap-10">
                <h1 className="text-2xl font-sans font-bold capitalize xl:text-4xl">
                  {singleMovie?.title_english
                    ? singleMovie?.title_english
                    : singleMovie?.title
                    ? singleMovie?.title
                    : singleMovie?.title_japanese}
                </h1>

                <div className=" lg:hidden w-full h-96 md:h-header bg-dry border-gray-800 rounded-lg overflow-hidden xl:col-span-1  ">
                  <img
                    src={singleMovie?.images.webp.large_image_url}
                    className="h-full object-contain w-full"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-start gap-4 font-medium text-dryGray md:items-center md:flex-row">
                  <div className=" flex-row flex space-x-4">
                    <div className=" w-fit bg-subMain text-xs px-2 py-1 rounded-sm">
                      HD 4K
                    </div>

                    <div className="md:hidden w-fit bg-subMain text-xs px-2 py-1 rounded-sm">
                      {singleMovie?.rank && singleMovie?.score
                        ? "Download"
                        : "Comming Soon"}
                    </div>
                  </div>
                  <FlexMovieItem
                    type={singleMovie?.genres[0].name}
                    duration={singleMovie?.duration}
                    date={singleMovie?.aired.from}
                  />
                </div>

                <p className=" text-text text-sm leading-7 line-clamp-3 !overflow-y-scroll rounded-lg description bg-main py-4 px-2  ">
                  {!singleMovie?.synopsis
                    ? "Server Error !"
                    : singleMovie?.synopsis}
                </p>

                {singleMovie?.rank && singleMovie?.score ? null : (
                  <div className=" flex items-center text-sm font-medium ">
                    <Link
                      to={myPath}
                      className=" gap-4 flex-rows w-40 bg-dry border-subMain text-white transitions border hover:text-subMain hover:border-white rounded-full py-2 sm:py-3"
                    >
                      <div className=" w3 h-3 mb-2"> Watch</div>
                    </Link>
                  </div>
                )}

                {singleMovie?.rank && singleMovie?.score ? (
                  <div className="grid grid-cols-3 gap-4 bg-main border border-gray-800 rounded-lg p-6 sm:grid-cols-5">
                    <div className=" col-span-1 flex flex-col items-center justify-center border-r border-border ">
                      <button className=" w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-transparent bg-opacity-20 border hover:text-subMain text-white border-subMain hover:border-white">
                        <FaShareAlt />
                      </button>
                    </div>

                    <div className="text-sm font-medium w-full col-span-2 flex items-center ">
                      <p className="truncate ml-2 ">
                        Rating&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                        {singleMovie?.score}
                      </p>
                    </div>

                    <div className=" col-span-3 flex items-center justify-end text-sm font-medium sm:col-span-2 ">
                      <Link
                        to={myPath}
                        className=" space-x-4 w-full flex-rows bg-dry border-subMain text-white transitions border hover:text-subMain hover:border-white rounded-full py-2 sm:py-3"
                      >
                        <div className=" w3 h-3 mb-2"> Watch</div>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* Download Section */}
              <div className=" hidden col-span-2 md:flex md:justify-end mt-2 md:mt-0">
                <button className=" relative flex-colo font-medium h-20 bg-subMain hover:bg-transparent transitions border-2 border-subMain rounded md:h-64 md:w-1/4">
                  <div className="absolute flex-rows tracking-widest uppercase text-sm gap-6 flex-rows md:rotate-90">
                    {singleMovie?.rank && singleMovie?.score
                      ? "download"
                      : "comming soon"}
                    <AiOutlineDoubleRight className=" w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
