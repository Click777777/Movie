import React, { useState } from "react";
import FlexMovieItem from "../Home/Banner/FlexMovieItem";
import Button from "./Button";

const MovieInfo = ({ data }) => {
  const [isClickIframe, setisClickIframe] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="mb-3 text-2xl font-bold md:text-xl lg:mb-6 lg:text-3xl">
        {data.data.title_english
          ? data.data.title_english
          : data.data.title
          ? data.data.title
          : data.data.title_japanese}
      </h1>
      <FlexMovieItem
        type={data.data.type}
        duration={data.data.duration}
        date={data.data.aired.from}
        score={data.data.score}
        rating={data.data.rating}
      />

      <p className="max-h-[200px] overflow-y-scroll text-sm font-extralight tracking-wider opacity-90 md:text-sm lg:text-base ">
        {data.data.synopsis}
      </p>
      {data.data.status === "Not yet aired" ? (
        <p className="text-sm">You can watch only trailer .</p>
      ) : null}
      <>
        <div onClick={() => setisClickIframe(true)}>
          <Button name="Watch now" />
        </div>
        {isClickIframe && (
          <div className="fixed inset-0 z-30 mx-auto max-w-screen-md backdrop-blur-[2px]">
            <div className=" aspect-w-16 aspect-h-9 top-[20%] lg2:top-2/4 lg2:-translate-y-1/2">
              <iframe
                src={`https://www.youtube.com/embed/${data.data.trailer.youtube_id}`}
                title={data.data.title}
                data-gtm-yt-inspected-8="true"
                width="640"
                height="360"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div
              className="group absolute top-[15%] right-0 cursor-pointer sm:top-[10%]"
              onClick={() => setisClickIframe(false)}
            >
              <div className="h-[1px] w-[120px] rotate-[15deg] bg-[#fff] group-hover:bg-subMain"></div>
              <div className="h-[1px] w-[120px] -rotate-[15deg] bg-[#fff] group-hover:bg-subMain"></div>
              <div className="mt-4 text-center text-sm uppercase ">close</div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MovieInfo;
