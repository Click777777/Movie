import React, { useContext, useEffect } from "react";
import Layout from "../Layout/Layout";
import { BsCollectionPlayFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import Footer from "../Layout/Footer/Footer";
import MovieTR from "../Components/MovieTR";
import Title from "../Components/Title";
import Spinner from "../Components/Spinner";
import Pagination from "../Components/Pagination";
import { Context } from "../Context/PaginationContext";
import { NavLink } from "react-router-dom";
import Genres from "../Components/Movies/Genres";

const Movies = () => {
  const {
    data,
    input,
    setInput,
    setCount,
    setSearchUrl,
    genRes,
    setGenRes,
    click,
    setClick,
    setTopData,
  } = useContext(Context);

  useEffect(() => {
    setTopData(null);
  }, [setTopData]);

  const clickHandler = () => {
    setClick(!click);
  };

  const backHandler = () => {
    setInput(null);
    setGenRes(null);
    setSearchUrl(null);
    setCount(Math.ceil(data.pagination.items.total / 25));
  };

  return (
    <Layout>
      {!data & !input && <Spinner />}
      {input ? (
        <>
          <div className="min-h-screen container mx-auto md:px-8 pt-16 mb-16">
            <div className="my-6 flex gap-4">
              <button
                className="bg-subMain text-white rounded text-sm px-6 py-1"
                onClick={backHandler}
              >
                <NavLink to="/movies">
                  <p className=" text-2xl select-none">
                    <TiArrowBack />
                  </p>
                </NavLink>
              </button>

              <button
                className="bg-subMain text-white rounded text-sm px-6 py-1"
                onClick={clickHandler}
              >
                Filter
              </button>
            </div>
            {click && <Genres />}
            <Title
              title="Total Movie"
              Icon={BsCollectionPlayFill}
              total={` - ( ${input?.pagination.items.total} )`}
            />
            <div className="grid gap-3 md:gap-4 lg:gap-6 xl:gap-10 mt-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 sm:mt-12">
              {input.data.map((arrDatas, index) => (
                <MovieTR key={index} arrData={arrDatas} />
              ))}
            </div>
          </div>
          <Pagination />
        </>
      ) : genRes ? (
        <>
          <div className="min-h-screen container mx-auto md:px-8 pt-16 mb-16">
            <div className="my-6 flex gap-4">
              <button
                className="bg-subMain text-white rounded text-sm px-6 py-1"
                onClick={backHandler}
              >
                <NavLink to="/movies">
                  <p className=" text-2xl select-none">
                    <TiArrowBack />
                  </p>
                </NavLink>
              </button>

              <button
                className="bg-subMain text-white rounded text-sm px-6 py-1"
                onClick={clickHandler}
              >
                Filter
              </button>
            </div>
            {click && <Genres />}
            <Title
              title="Total Movie"
              Icon={BsCollectionPlayFill}
              total={` - ( ${genRes?.pagination.items.total} )`}
            />
            <div className="grid gap-3 md:gap-4 lg:gap-6 xl:gap-10 mt-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 sm:mt-12">
              {genRes.data.map((arrDatas, index) => (
                <MovieTR key={index} arrData={arrDatas} />
              ))}
            </div>
          </div>
          <Pagination />
        </>
      ) : (
        <>
          {data && (
            <div className="min-h-screen container mx-auto md:px-8 pt-16 mb-16">
              <div className="my-6">
                <button
                  className="bg-subMain text-white rounded text-sm px-6 py-1"
                  onClick={clickHandler}
                >
                  Filter
                </button>
              </div>
              {/* {click && <Filters />} */}
              {click && <Genres />}
              <Title
                title="Total Movie"
                Icon={BsCollectionPlayFill}
                total={` - ( ${data?.pagination.items.total} )`}
              />
              <div className="grid gap-3 md:gap-4 lg:gap-6 xl:gap-10 mt-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 sm:mt-12">
                {data.data.map((arrDatas, index) => (
                  <MovieTR key={index} arrData={arrDatas} />
                ))}
              </div>
            </div>
          )}

          <Pagination />
        </>
      )}
      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default Movies;
