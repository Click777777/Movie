import React, { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Layout from "../../Layout";
import useFetch from "../../../CustomHook/useFetch";
import { SearchAnimeContext } from "../../../Context/SearchContext";
import RenderData from "../RenderData";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const SearchName = () => {
  const { state, state1 } = useContext(SearchAnimeContext);
  const [page, setPage] = useState(1);
  const [fetch, setFetch] = useState(false);
  const [name, setName] = useState("");
  const [storedData, setStoredData] = useState([]);

  const url = `https://api.jikan.moe/v4/anime?q=${name}&page=${page}&limit=24&order_by=score&sort=desc`;
  const { data } = useFetch(url, fetch);

  //use effect
  useEffect(() => {
    data && setStoredData((prev) => [...prev, ...data.data]);
  }, [data]);

  useEffect(() => {
    state.search && setName(state.search.name);
  }, [state.search]);

  useEffect(() => {
    if (state.search && state.search.name === "") {
      setFetch(false);
    } else {
      setFetch(true);
    }
  }, [state.search]);

  useEffect(() => {
    if (state.search && state.search.click) {
      setStoredData([]);
      setPage(1);
    }
  }, [state.search]);

  useEffect(() => {
    if (state1.search && state1.search.name === "") {
      state1.search.render([]);
    }
  }, [state1.search]);

  return (
    <Layout>
      <div className=" relative">
        {/* SearchBar */}
        <div className="pt-[68px]">
          <div className={`container relative mx-auto bg-transparent`}>
            <SearchBar />
          </div>
        </div>

        {state.search && storedData.length ? (
          <RenderData
            setPage={setPage}
            name={state.search.name}
            storedData={storedData}
            data={data}
            title={"search by"}
          />
        ) : (
          <div className="container mx-auto flex h-[500px] items-center justify-center p-4">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchName;
