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
    <section id="topRatedSection" className="my-10 mx-4 md:mx-8">
      <Title title="Top Rated Anime" Icon={BsCollectionPlayFill} />
      <div className="mt-6 grid grid-cols-2 gap-8 xs:grid-cols-3 sm:mt-12 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8 xl:grid-cols-5 xl:gap-11 2xl:grid-cols-6">
        {data &&
          data.data.map((arrData, index) => (
            <MovieTR key={index} arrData={arrData} />
          ))}
      </div>
    </section>
  );
};

export default TopRated;
