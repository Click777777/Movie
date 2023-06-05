import React from "react";
import SearchTitle from "./Search/SearchTitle";
import { MdFilterVintage } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../Components/Spinner";
import MovieTR from "../../Components/MovieTR";

const RenderData = ({ setPage, name, storedData, data, title }) => {
  const fetchData = () => {
    setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div id="topRatedSection" className={`container mx-auto p-4 `}>
      <SearchTitle
        title={title}
        Icon={MdFilterVintage}
        name={name === "" ? "default" : name}
      />

      <div className="infinite-scroll-container">
        <InfiniteScroll
          dataLength={storedData.length}
          next={fetchData}
          hasMore={data?.pagination.has_next_page}
          loader={storedData.length > 0 ? <Spinner /> : null}
        >
          <div className="mt-6 grid grid-cols-2 gap-3 xs:grid-cols-2  sm:mt-12 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-6 xl:grid-cols-5 xl:gap-10 2xl:grid-cols-6">
            {!storedData.length
              ? null
              : storedData.map((arrData, index) => (
                  <MovieTR key={index} arrData={arrData} />
                ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default RenderData;
