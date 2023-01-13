import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./CssSwiper/popularMovie.css";

const PopularMovies = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const topAnime = "https://api.jikan.moe/v4/watch/episodes/popular";
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
  }, []);

  return (
    <div className="my-16">
      <h2 className="container mx-auto px-2 sm:text-xl font-bold text-lg text-subMain">
        Trending
      </h2>
      <div className="mt-6 sm:mt-12 grid gap-10 relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            475: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          className="swipered headSweaper !w-full lg:!w-[95%]"
        >
          {apiData
            ? apiData.data.map((data, index) =>
                data.region_locked === false ? (
                  <SwiperSlide className="swiper-slider">
                    <div className="flex items-end relative w-full">
                      <div className="titleNo items-center justify-end space-y-4 px-3 bgTrend !hidden md:!flex !h-36 xs:!h-56 md:!h-60 lg:!h-64 xl:!h-80 2xl:!h-64">
                        <p className="rotate-180 text-lg truncate">
                          {data.entry.title}
                        </p>
                        <h2 className="wMode text-2xl font-black text-subMain">
                          {index}
                        </h2>
                      </div>
                      <img
                        src={data.entry.images.webp.large_image_url}
                        alt="imageError"
                        className="!w-full !h-36 xs:!w-full xs:!h-56 md:!w-44 md:!h-60 lg:!w-44 lg:!h-64 xl:!w-60 xl:!h-80 2xl:!w-44 2xl:!h-64"
                      />
                    </div>
                  </SwiperSlide>
                ) : null
              )
            : null}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovies;
