import React, { useEffect, useState } from "react";
import Title from "./Title";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import axios from "axios";

const MovieCast = ({ singleMovie }) => {
  let character = ` https://api.jikan.moe/v4/anime/${singleMovie?.mal_id}/characters`;
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async (param) => {
      try {
        const response = await axios.get(param);
        setResponseData(response.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData(character);
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    fetchData(character);
  }, [character]);

  return (
    <>
      {responseData && responseData.status === 404 ? null : (
        <div className=" my-12">
          {!responseData?.data ? null : (
            <Title title="Character" Icon={FaUserFriends} />
          )}

          <div className="mt-10">
            <Swiper
              spaceBetween={10}
              // modules={[Autoplay]}
              // loop={true}
              // speed={1000}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: true,
              // }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                270: {
                  slidesPerView: 2,
                },
                400: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 8,
                  spaceBetween: 30,
                },
              }}
            >
              {!responseData?.data
                ? null
                : responseData &&
                  responseData.data.map((arrMap, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full p-3 bg-dry border border-gray-800 rounded  flex-colo italic text-text text-xs">
                        <img
                          src={arrMap.character.images.webp.image_url}
                          alt="imgErr"
                          className=" object-contain rounded"
                        />
                        <p className=" mt-4">{arrMap.character.name}</p>
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCast;
