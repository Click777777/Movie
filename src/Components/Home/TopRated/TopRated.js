import React from "react";
import Title from "../../Title";
import { BsCollectionPlayFill } from "react-icons/bs";
import MovieTR from "../../MovieTR";
import useFetch from "../../../CustomHook/useFetch";

const TopRated = () => {
  const url = "https://api.jikan.moe/v4/top/anime?limit=10";
  const { data } = useFetch(url);
  // console.log(data);

  return (
    <div id="topRatedSection" className="my-10 md:mx-8">
      <Title title="Top Rated Anime" Icon={BsCollectionPlayFill} />
      <div className="mt-6 grid grid-cols-2 gap-5 xs:grid-cols-3 sm:mt-12 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-6 xl:grid-cols-5 xl:gap-10 2xl:grid-cols-6">
        {data &&
          data.data.map((arrData, index) => (
            <MovieTR key={index} arrData={arrData} />
          ))}
      </div>
    </div>
  );
};

export default TopRated;
