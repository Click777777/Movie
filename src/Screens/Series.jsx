import React, { useState, useEffect } from "react";
import { MdFilterVintage } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../Layout/Layout";
import SearchTitle from "../Layout/Navbar/Search/SearchTitle";
import Spinner from "../Components/Spinner";
import useFetch from "../CustomHook/useFetch";
import MovieTR from "../Components/MovieTR";
import LoadingSpinner from "../Components/LoadingSpinner";

const Series = () => {
  const [page, setPage] = useState(1);
  const [storedData, setStoredData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?limit=24&page=${page}&type=tv&order_by=score&sort=desc`;
  const { data, loading } = useFetch(url, true);

  useEffect(() => {
    if (data) {
      setStoredData((prev) => [...prev, ...data.data]);
    }
  }, [loading, data]);

  const fetchData = () => {
    setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 1000);
  };

  return (
    <Layout>
      {!data && (
        <div className="container mx-auto flex h-screen items-center justify-center p-4">
          <LoadingSpinner />
        </div>
      )}
      {data && (
        <div className=" mt-[64px] min-h-screen">
          <div className={`container mx-auto p-4 `}>
            <SearchTitle title="tv series" Icon={MdFilterVintage} />

            <div className="infinite-scroll-container">
              <InfiniteScroll
                dataLength={storedData.length}
                next={fetchData}
                hasMore={data.pagination.has_next_page}
                loader={data.pagination.has_next_page ? <Spinner /> : null}
              >
                <div className="mt-6 grid grid-cols-2 gap-8 xs:grid-cols-3 sm:mt-12 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8 xl:grid-cols-5 xl:gap-11 2xl:grid-cols-6">
                  {loading
                    ? null
                    : storedData.map((data, index) => (
                        <MovieTR key={index} arrData={data} />
                      ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Series;
