import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsCollectionFill } from "react-icons/bs";
import Title from "../../Title";
import { Link } from "react-router-dom";
import PreNextBTN from "./PreNextBTN";
import useFetch from "../../../CustomHook/useFetch";

const PopularMovies = () => {
  const url = "https://api.jikan.moe/v4/seasons/upcoming";
  const { data } = useFetch(url);

  return (
    <div className=" mt-8 md:mx-8" id="Trend">
      <Title title="upcoming next season" Icon={BsCollectionFill} />
      <div className="relative">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            475: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="swipered headSweaper !w-full lg:!w-[95%] "
        >
          {data
            ? data.data.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slider paddingAdd relative py-8 transition-all hover:-translate-y-8"
                >
                  <Link to={`anime/detail/${data.mal_id}`}>
                    <div className="relative cursor-pointer pb-[141%]">
                      <img
                        src={data.images.webp.large_image_url}
                        alt="imageError"
                        className="absolute h-full w-full object-cover"
                      />
                      <div className="absolute top-0 left-0 z-10 rounded-br-md bg-dry p-2 sm:hidden">
                        <h2 className="text-xs font-black text-subMain xs:text-base">
                          {index + 1}
                        </h2>
                      </div>

                      <div className="bgColor absolute bottom-0 hidden h-full sm:block">
                        <div className="flex h-full flex-col justify-end overflow-hidden">
                          <p
                            className="max-h-[150px] rotate-180 text-ellipsis p-2 text-base line-clamp-1"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            {data.title_english
                              ? data.title_english
                              : data.title
                              ? data.title
                              : data.title_japanese}
                          </p>

                          <h2 className=" p-2 text-center text-xs font-black text-subMain xs:text-base">
                            {index + 1}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : null}
          <PreNextBTN />
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovies;
