import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "../CssSwiper/popularMovie.css";
import { BsCollectionFill } from "react-icons/bs";
import Title from "../../Title";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const topAnime = "https://api.jikan.moe/v4/seasons/upcoming";
    const fetchData = (data, state) => {
      axios
        .get(data)
        .then((response) => {
          state(response.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData(topAnime, setApiData);
  }, []);

  return (
    <div className=" mt-8 md:mx-8" id="Trend">
      <Title title="Comming Soon" Icon={BsCollectionFill} />
      <div className=" grid gap-10 relative">
        <Swiper
          spaceBetween={10}
          // loop={false}
          // speed={1000}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: true,
          // }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          pagination={{
            clickable: true,
          }}
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
          {apiData
            ? apiData.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slider paddingAdd relative hover:-translate-y-8 transition-all py-8"
                >
                  <Link to={`movies/${data.mal_id}`}>
                    <div className=" select-none flex items-end relative w-full border border-border  rounded-md overflow-hidden h-36 xs:!h-56 md:!h-56 lg:!h-64 xl:!h-80 2xl:!h-64">
                      <div className="absolute top-0 left-0 md:hidden p-2 bg-dry rounded">
                        <h2 className="wMode text-xs xs:text-base font-black text-subMain">
                          {index}
                        </h2>
                      </div>
                      <div className="titleNo items-center justify-end space-y-4 px-2 bgTrend !hidden md:!flex !h-36 xs:!h-56 md:!h-56 lg:!h-64 xl:!h-80 2xl:!h-64">
                        <p className="rotate-180 text-base truncate">
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
                        className=" w-full object-cover !h-full hover:cursor-pointer "
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovies;
