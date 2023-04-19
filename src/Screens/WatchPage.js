import React, { useState, useContext } from "react";
import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaPlay, FaHeart, FaCloudUploadAlt } from "react-icons/fa";
import { Context } from "../Context/PaginationContext";
import errorImg from "../assist/errror404.jpg";

const WatchPage = () => {
  const { relatedMovie } = useContext(Context);
  const [play, setPlay] = useState(false);
  return (
    relatedMovie && (
      <Layout>
        <div className=" container mx-auto bg-dry p-6 mb-12 pt-[88px]">
          <div className=" flex-btn gap-2 bg-main flex-wrap mb-6 p-6 rounded border border-gray-800">
            <div className=" flex gap-3 items-center text-dryGray font-bold text-sm md:text-xl">
              <div>
                <TfiVideoClapper className=" text-subMain" />
              </div>{" "}
              <p>
                {relatedMovie.title_english
                  ? relatedMovie.title_english
                  : relatedMovie.title}
              </p>
            </div>

            <div className=" flex-btn gap-5 w-full sm:w-auto">
              <button className="bg-white bg-opacity-30 transition hover:text-subMain text-white text-sm px-4 py-3 rounded">
                <FaHeart />
              </button>
              <button className="flex-rows gap-2 bg-subMain transition hover:text-main text-white text-sm px-4 py-3 rounded">
                <FaCloudUploadAlt /> Download
              </button>
            </div>
          </div>

          {play ? (
            <div className="resp-container">
              <iframe
                className="resp-iframe"
                title={relatedMovie.title_english}
                src={relatedMovie.trailer.embed_url}
                allow="encrypted-media; autoplay; fullscreen"
              ></iframe>
            </div>
          ) : (
            <div className=" w-full h-full  rounded-lg overflow-hidden relative">
              {!relatedMovie.trailer.embed_url ? null : (
                <div className=" absolute top-0 left-0 bottom-0 right-0 bg-main flex-colo bg-opacity-30">
                  <button
                    onClick={() => setPlay(true)}
                    className="w-8 h-8 md:w-10 md:h-10 xl:w-20 xl:h-20 font-medium text-xl bg-white text-subMain border border-subMain rounded-full flex-colo"
                  >
                    <FaPlay className="w-3 xl:w-8" />
                  </button>
                </div>
              )}

              <img
                src={
                  relatedMovie.trailer.images.maximum_image_url
                    ? relatedMovie.trailer.images.maximum_image_url
                    : errorImg
                }
                alt=""
                className=" w-full h-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>
        <div className="w-full hidden lg:inline-block">
          <Footer></Footer>
        </div>
      </Layout>
    )
  );
};

export default WatchPage;
