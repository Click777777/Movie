import React, { useEffect, useContext } from "react";
import Title from "../../Title";
import { BsCollectionPlayFill } from "react-icons/bs";
import axios from "axios";
import MovieTR from "../../MovieTR";
import SeeMore from "../SeeMore";
import { Context } from "../../../Context/PaginationContext";

const TopRated = () => {
  const topRatedApi = "https://api.jikan.moe/v4/top/anime?limit=12";
  const { topData, setTopData } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(topRatedApi);
        setTopData(response.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData();
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [setTopData]);

  return (
    <div id="topRatedSection" className="my-10 md:mx-8">
      <Title title="Top Rated Anime" Icon={BsCollectionPlayFill} />
      <div className="grid gap-3 md:gap-4 lg:gap-6 xl:gap-10  mt-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 sm:mt-12">
        {topData === null
          ? null
          : topData.data.map((arrData, index) => (
              <MovieTR key={index} arrData={arrData} />
            ))}
      </div>

      <SeeMore />
    </div>
  );
};

export default TopRated;
