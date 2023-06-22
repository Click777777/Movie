import React, { useState, useEffect, useContext } from "react";
import Layout from "../../Layout";
import SearchBar from "../Search/SearchBar";
import Genre from "../Search/Genre";
import useFetch from "../../../CustomHook/useFetch";
import { Context } from "../../../Context/GenreFilterContext";
import RenderData from "../RenderData";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const Filter = () => {
  const [storedData, setStoredData] = useState([]);
  const [page, setPage] = useState(1);
  const [fetch, setFetch] = useState(false);
  const { state, state1, isSelect } = useContext(Context);

  const baseUrl = "https://api.jikan.moe/v4/genres/anime";
  const { data: genre } = useFetch(baseUrl);
  useEffect(() => {
    genre && genre.data.sort((a, b) => a.name.localeCompare(b.name));
  }, [genre]);

  //arr to string
  const genreById = state.join();
  const genreByName = state1.join();

  const url =
    genreById !== ""
      ? `https://api.jikan.moe/v4/anime?genres=${genreById}&page=${page}&limit=24&order_by=score&sort=desc`
      : null;
  const { data } = useFetch(url, fetch);

  useEffect(() => {
    if (data) {
      setStoredData((prev) => [...prev, ...data.data]);
    }
  }, [data]);

  useEffect(() => {
    if (genreById !== "") {
      setFetch(true);
    }
    setPage(1);
    setStoredData([]);
  }, [genreById]);

  return (
    <Layout>
      <div className=" relative">
        {/* SearchBar */}
        <div className="pt-[68px]">
          <div className={`container relative mx-auto bg-transparent`}>
            <SearchBar />
          </div>
        </div>

        {/* Genres  */}
        <div className="container mx-auto mb-20 p-4 ">
          <h3 className=" mb-5 capitalize">Genre</h3>
          <div className="flex h-[226px] w-full flex-wrap gap-3 overflow-y-scroll ">
            {genre
              ? genre.data.map((item) => (
                  <Genre key={item.mal_id} item={item} />
                ))
              : null}
          </div>
        </div>

        {storedData.length ? (
          <RenderData
            setPage={setPage}
            name={genreByName}
            storedData={storedData}
            data={data}
            title={"filter by"}
            isGenre={isSelect}
          />
        ) : (
          genreById !== "" && (
            <div className="container mx-auto mb-20 flex h-min items-center justify-center p-4">
              <LoadingSpinner />
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Filter;
