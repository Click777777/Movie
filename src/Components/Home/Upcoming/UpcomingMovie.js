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
              slidesPerView: 1,
              spaceBetween: 0,
            },
            250: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
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
                    <div className=" relative flex h-36 w-full select-none items-end overflow-hidden  rounded-md border border-border xs:!h-56 md:!h-56 lg:!h-64 xl:!h-80 2xl:!h-64">
                      <div className="absolute top-0 left-0 rounded bg-dry p-2 md:hidden">
                        <h2 className="wMode text-xs font-black text-subMain xs:text-base">
                          {index + 1}
                        </h2>
                      </div>
                      <div className="titleNo bgTrend !hidden !h-36 items-center justify-end space-y-4 px-2 xs:!h-56 md:!flex md:!h-56 lg:!h-64 xl:!h-80 2xl:!h-64">
                        <p className="rotate-180 truncate text-base">
                          {data.title_english
                            ? data.title_english
                            : data.title
                            ? data.title
                            : data.title_japanese}
                        </p>
                        <h2 className="wMode text-xl font-black text-subMain">
                          {index + 1}
                        </h2>
                      </div>
                      <img
                        src={data.images.webp.large_image_url}
                        alt="imageError"
                        className=" !h-full w-full object-cover hover:cursor-pointer "
                      />
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
