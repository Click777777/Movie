import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import FlexMovieItem from "../../FlexMovieItem";

const Banner = () => {
  const [apiData, setApiData] = useState(0);

  useEffect(() => {
    const seasonNow = "https://api.jikan.moe/v4/seasons/now";
    const fetchData = (data, state) => {
      axios
        .get(data)
        .then((response) => {
          state(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData(seasonNow, setApiData);
  }, []);

  return (
    <div className={`w-full flex flex-col justify-between pt-[64px] space-y-4`}>
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
        className="w-full bg-dry h-[65vh]  sm:h-[70vh] md:h-[82vh]  2xl:h-[95vh] "
      >
        {apiData
          ? apiData.data.slice(0, 10).map((sliceData, index) => (
              <SwiperSlide key={index} className="!relative ">
                <img
                  src={sliceData.trailer.images.maximum_image_url}
                  alt="movieImg"
                  className="w-full h-full object-cover "
                />
                <div className="gradinetImg absolute h-full w-full bottom-0"></div>
                {/* about Movie */}
                <div className="top-0 bottom-0 left-0 right-0 bg-opacity-40 absolute bg-main  ">
                  <div className="absolute bottom-[8%] md:top-1/2 md:translate-y-[-30%] lg:translate-y-[-20%] px-2 lg:px-16 container left-1/2 translate-x-[-50%]">
                    <div className="max-w-[100%] xs:max-w-[80%] sm:max-w-[80%] md:max-w-[68%] flex flex-col gap-4 lg:gap-8">
                      <h1 className="text-base md:text-xl lg:text-3xl font-bold">
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
                      <p className="font-extralight text-sm md:text-sm lg:text-base opacity-90 line-clamp-3 tracking-wider ">
                        {sliceData.synopsis}
                      </p>
                      <div className="flex items-center gap-5">
                        <Link
                          to={`movies/${sliceData.mal_id}`}
                          className="bg-subMain hover:text-main transition text-white px-3 py-2 lg:px-5 rounded-md lg:rounded-3xl font-meduium text-xs sm:text-sm"
                        >
                          <div className="flex-rows gap-2">
                            <p className=" text-[10px] lg:text-sm">Watch Now</p>
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
        <div className="flex items-center justify-center flex-col space-y-2">
          <div className="text-white fw-bold text-xs ">
            Watch & Download Free HD Movies and Tv Show
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
