import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../Context/PaginationContext";
import ResponsivePagination from "react-responsive-pagination";

const Pagination = () => {
  const {
    setData,
    setInput,
    currentPage,
    setCurrentPage,
    searchCurrent,
    setSearchCurrent,
    genresCurrent,
    setGenresCurrent,
    count,
    setCount,
    genRes,
    setGenRes,
    genResId,
    topData,
    setTopData,
    topRatedCurrent,
    setTopRatedCurrent,
    searchUrl,
  } = useContext(Context);

  useEffect(() => {
    setTopData(null);
  }, [setTopData]);

  useEffect(() => {
    let url = ``;
    searchUrl
      ? (url = `${searchUrl}&page=${searchCurrent}`)
      : genRes
      ? (url = `https://api.jikan.moe/v4/anime?page=${genresCurrent}&order_by=score&sort=desc`)
      : topData
      ? (url = `https://api.jikan.moe/v4/top/anime?page=${topRatedCurrent}`)
      : (url = `https://api.jikan.moe/v4/anime?page=${currentPage}`);

    const fetchData = async (para) => {
      try {
        const response = await axios.get(url);
        para(response.data);

        const total = response.data.pagination.items.total;
        const inputTotal = response.data.pagination.items.total;
        searchUrl
          ? setCount(Math.ceil(inputTotal / 25))
          : genRes
          ? setCount(Math.ceil(genRes.pagination.items.total / 25))
          : topData
          ? setCount(Math.ceil(topData.pagination.items.total / 25))
          : setCount(Math.ceil(total / 25));
      } catch (error) {
        console.log(error);
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData(para);
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };

    searchUrl
      ? fetchData(setInput)
      : topData
      ? fetchData(setTopData)
      : fetchData(setData);
  }, [
    searchUrl,
    setData,
    setInput,
    setCount,
    genRes,
    currentPage,
    genresCurrent,
    searchCurrent,
    topData,
    topRatedCurrent,
    setTopData,
  ]);

  const fetchDataSec = async (value) => {
    let url = ``;
    searchUrl
      ? (url = `${searchUrl}&page=${value}`)
      : genRes
      ? (url = `https://api.jikan.moe/v4/anime?genres=${genResId}&page=${value}&order_by=score&sort=desc`)
      : topData
      ? (url = `https://api.jikan.moe/v4/top/anime?&page=${value}`)
      : (url = `https://api.jikan.moe/v4/anime?page=${value}`);
    const response = await axios.get(url);
    return response.data;
  };

  const handlePageClick = async (e) => {
    searchUrl
      ? setSearchCurrent(e)
      : genRes
      ? setGenresCurrent(e)
      : topData
      ? setTopRatedCurrent(e)
      : setCurrentPage(e);
    const data = await fetchDataSec(e);
    searchUrl
      ? setInput(data)
      : genRes
      ? setGenRes(data)
      : topData
      ? setTopData(data)
      : setData(data);
    window.scrollTo(0, 0);
  };

  return (
    <div className=" w-1/2 m-auto my-6">
      {searchUrl ? (
        <ResponsivePagination
          total={count}
          current={searchCurrent}
          onPageChange={handlePageClick}
        />
      ) : genRes ? (
        <ResponsivePagination
          total={count}
          current={genresCurrent}
          onPageChange={handlePageClick}
        />
      ) : topData ? (
        <ResponsivePagination
          total={count}
          current={topRatedCurrent}
          onPageChange={handlePageClick}
        />
      ) : (
        <ResponsivePagination
          total={count}
          current={currentPage}
          onPageChange={handlePageClick}
        />
      )}
    </div>
  );
};

export default Pagination;
