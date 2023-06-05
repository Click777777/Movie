import React, { useState, useEffect, useContext } from "react";
import { ImSearch } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { debounce } from "lodash";
import useFetch from "../../../CustomHook/useFetch";
import { useNavigate } from "react-router-dom";
import { SearchAnimeContext } from "../../../Context/SearchContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const { dispatch, dispatch1 } = useContext(SearchAnimeContext);
  const [typeData, setTypeData] = useState("");
  const [fetch, setFetch] = useState(false);
  const [renderData, setRenderData] = useState([]);

  const url =
    typeData !== ""
      ? `https://api.jikan.moe/v4/anime?q=${typeData}&limit=24&order_by=score&sort=desc`
      : null;
  const { data } = useFetch(url, fetch);

  const filterHandler = () => {
    navigate("/anime/filter");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/anime/search");
    dispatch({
      type: "submitSearch",
      payload: { name: typeData, click: true },
    });
    setRenderData([]);
  };

  const debouncedSearch = debounce((value) => {
    setTypeData(value);
    setFetch(true);
    dispatch1({
      type: "renderData",
      payload: { name: value, render: setRenderData },
    });
  }, 1000);

  const handleChange = (event) => {
    debouncedSearch(event.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const perEpisode = (originalString) => {
    return originalString.replace(/\sper ep/g, "");
  };

  const viewAllResult = () => {
    navigate("/anime/search");
    dispatch({
      type: "submitSearch",
      payload: { name: typeData, click: true },
    });
    setRenderData([]);
  };

  // useEffect
  useEffect(() => {
    data && setRenderData([...data.data]);
  }, [data]);

  useEffect(() => {
    if (!url) {
      setRenderData([]);
    }
  }, [url]);

  return (
    <>
      <div className="flex w-full items-center space-x-2 p-4">
        <div
          className="cursor-pointer rounded-md border border-white bg-border p-3"
          onClick={filterHandler}
        >
          <FaFilter className="h-[14px] w-[14px]" />
        </div>

        <div className="w-full rounded-md bg-white py-2 px-4 text-main">
          <form className="relative" onSubmit={formSubmitHandler}>
            <input
              onChange={handleChange}
              type="text"
              name="text"
              id="text"
              placeholder="Type anime name here for search ..."
              className="w-full bg-transparent text-sm font-medium  tracking-wide placeholder-main"
            />
            {/* searchIcon */}
            <button
              className={`absolute top-1 right-0 h-[16px] w-[16px] cursor-pointer ${
                typeData && renderData.length ? "block" : "hidden"
              }`}
            >
              <ImSearch />
            </button>
          </form>
        </div>
      </div>

      {/* render search data */}
      {renderData.length ? (
        <div className="absolute top-[72px] z-10 flex w-full flex-col gap-y-4 bg-black p-4">
          {renderData.slice(0, 5).map((item) => (
            <Link
              to={`anime/detail/${item.mal_id}`}
              key={item.mal_id}
              className="flex w-full items-center space-x-4"
            >
              <div className="min-w-[50px]">
                <img
                  src={item.images.webp.image_url}
                  alt={item.title_english}
                  className=" h-[70px] w-[50px] bg-cover"
                />
              </div>

              <div className="flex min-w-[50px] flex-col gap-2">
                <div className="truncate">
                  {item.title_english
                    ? item.title_english
                    : item.title
                    ? item.title
                    : item.title_japanese}
                </div>
                <div className="text-sm text-gray-500">{item.status}</div>
                <div className="flex flex-wrap gap-1">
                  <p className="text-sm text-gray-500">
                    {formatDate(item.aired.from)} /
                  </p>
                  <p className="text-sm text-white">{item.type}</p>
                  <p className="text-sm text-gray-500">
                    / {perEpisode(item.duration)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div
            onClick={viewAllResult}
            className="font-meduium mt-4 cursor-pointer rounded-sm bg-subMain px-3 py-2 text-center text-xs capitalize text-white sm:text-sm lg:px-5"
          >
            view all results
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchBar;
