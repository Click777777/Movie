import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import FlexMovieItem from "../FlexMovieItem";
import { AiFillCaretRight } from "react-icons/ai";
import { MdNotStarted } from "react-icons/md";

const Banner = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const topAnime = "https://api.jikan.moe/v4/seasons/now";
    const test = "https://api.jikan.moe/v4/recommendations/anime";
    const fetchData = (data, state) => {
      axios
        .get(data)
        .then((response) => {
          console.log(`${data} is : `, response.data);
          state(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData(topAnime, setApiData);
    fetchData(test, null);
  }, []);

  return (
    <div className=" w-full h-[50vh] md:h-[40vh] lg:h-[100vh] xl:h-[100vh]">
      <Swiper
        loop={true}
        speed={1000}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full rounded bg-dry h-full"
      >
        {apiData
          ? apiData.data.slice(0, 4).map((sliceData, index) => (
              <SwiperSlide key={index} className="relative ">
                <img
                  src={sliceData.trailer.images.maximum_image_url}
                  alt="movieImg"
                  className="w-full h-full object-cover blur-[1px] opacity-60"
                />
                <div className="gradinetImg absolute h-full w-full top-0"></div>
                {/* about Movie */}
                <div className="absolute bottom-[10%] md:bottom-0 md:top-1/2 md:translate-y-[-30%] lg:translate-y-[-20%] px-2 container left-1/2 translate-x-[-50%]">
                  <div className="max-w-[80%] md:max-w-[50%] flex flex-col gap-4">
                    <h1 className="text-xl md:text-3xl font-bold">
                      {sliceData.title_english}
                    </h1>
                    <FlexMovieItem
                      type={sliceData.type}
                      duration={sliceData.duration}
                      date={sliceData.aired.from}
                      rating={sliceData.rating}
                    />
                    <p className="font-extralight text-sm opacity-80 h-9 leading-5 dotdot truncate ...">
                      {sliceData.synopsis}
                    </p>
                    <div className="flex items-center gap-5">
                      <Link
                        to="#"
                        className="bg-subMain hover:text-main transition text-white px-5 py-2 rounded-3xl font-meduium text-xs sm:text-sm"
                      >
                        <div className="flex gap-2">
                          <MdNotStarted />
                          <p>Watch Now</p>
                        </div>
                      </Link>
                      <button className="bg-white bg-opacity-30 hover:text-subMain transition text-white px-5 py-2 rounded-3xl font-meduium text-xs sm:text-sm">
                        <div className="flex gap-2">
                          <AiFillCaretRight />
                          <p>Detail</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default Banner;
