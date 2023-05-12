import React from "react";
import Title from "./Title";
import { BsCollectionFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import MovieTR from "./MovieTR";

const RelativeMovie = ({ relatedMovie }) => {
  return (
    <>
      {relatedMovie && (
        <div className=" my-16">
          <Title title="Related Movies" Icon={BsCollectionFill} />
          <div className="mt-10">
            <Swiper
              spaceBetween={10}
              // modules={[Autoplay]}
              // loop={false}
              // speed={1000}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: true,
              // }}
              breakpoints={{
                0: {
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
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              <div className="grid gap-3 md:gap-4 lg:gap-6 xl:gap-10  mt-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 sm:mt-12">
                {relatedMovie &&
                  relatedMovie.map((arrData, index) => (
                    <SwiperSlide key={index}>
                      <MovieTR key={index} arrData={arrData} />
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default RelativeMovie;
