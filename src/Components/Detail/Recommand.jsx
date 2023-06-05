import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Title";
import MovieRecommand from "./MovieRecommand";

const Recommand = ({ recommand }) => {
  return (
    <>
      {recommand ? (
        <div className="container mx-auto my-16 p-4">
          {recommand.data.length ? (
            <Title title="Recommendation" Icon={BsCollectionFill} />
          ) : null}
          <div className="mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {recommand &&
                recommand.data.map((arrData, index) => (
                  <SwiperSlide key={index}>
                    <MovieRecommand arrData={arrData} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Recommand;
