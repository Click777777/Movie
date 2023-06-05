import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import FlexMovieItem from "./FlexMovieItem";
import useFetch from "../../../CustomHook/useFetch";

const Banner = () => {
  const url = "https://api.jikan.moe/v4/seasons/2023/spring?limit=10";
  const { data } = useFetch(url);

  return (
    <div className={`flex w-full flex-col justify-between space-y-4 pt-[64px]`}>
      <Swiper
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        className="h-[65vh] w-full bg-dry  sm:h-[70vh] md:h-[82vh]  2xl:h-[95vh] "
      >
        {data
          ? data.data.slice(0, 10).map((sliceData, index) => (
              <SwiperSlide key={index} className="!relative">
                <img
                  src={sliceData.trailer.images.maximum_image_url}
                  alt="movieImg"
                  className="h-full w-full object-cover "
                />
                <div className="gradinetImg absolute bottom-0 h-full w-full"></div>
                {/* about Movie */}
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-main bg-opacity-40  ">
                  <div className="container absolute bottom-[8%] left-1/2 translate-x-[-50%] px-2 md:top-1/2 md:translate-y-[-30%] lg:translate-y-[-20%] lg:px-16">
                    <div className="flex max-w-[100%] flex-col gap-4 xs:max-w-[80%] sm:max-w-[80%] md:max-w-[68%] lg:gap-6">
                      <h1 className="mb-3 text-base font-bold md:text-xl lg:mb-6 lg:text-3xl">
                        {sliceData.title_english
                          ? sliceData.title_english
                          : sliceData.title
                          ? sliceData.title
                          : sliceData.title_japanese}
                      </h1>
                      <FlexMovieItem
                        type={sliceData.type}
                        duration={sliceData.duration}
                        date={sliceData.aired.from}
                        score={sliceData.score}
                        rating={sliceData.rating}
                      />
                      <p className="text-sm font-extralight tracking-wider opacity-90 line-clamp-3 md:text-sm lg:text-base ">
                        {sliceData.synopsis}
                      </p>
                      <div className="flex items-center gap-5">
                        <Link
                          to={`anime/detail/${sliceData.mal_id}`}
                          className="font-meduium rounded-md bg-subMain px-3 py-2 text-xs text-white transition hover:text-main sm:text-sm lg:rounded-3xl lg:px-5"
                        >
                          <div className="flex-rows gap-2">
                            <p className=" text-[10px] capitalize lg:text-sm">
                              view detail
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>

      <div className="bg-transparent">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="fw-bold text-xs capitalize text-white ">
            you can watch directly HD movie & TV series. don't need to sing up.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
