import React, { createContext, useState } from "react";

export const Context = createContext();

const PaginationContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState(null);
  const [searchUrl, setSearchUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(null);
  const [genRes, setGenRes] = useState(null);
  const [genResId, setGenResId] = useState(null);
  const [genresCurrent, setGenresCurrent] = useState(1);
  const [searchCurrent, setSearchCurrent] = useState(1);
  const [topRatedCurrent, setTopRatedCurrent] = useState(1);
  const [click, setClick] = useState(false);
  const [topData, setTopData] = useState(null);
  const [relatedMovie, setRelatedMovie] = useState(null);

  return (
    <Context.Provider
      value={{
        topData,
        setTopData,

        data,
        setData,

        input,
        setInput,

        searchUrl,
        setSearchUrl,

        currentPage,
        setCurrentPage,

        searchCurrent,
        setSearchCurrent,

        genresCurrent,
        setGenresCurrent,

        topRatedCurrent,
        setTopRatedCurrent,

        count,
        setCount,

        genRes,
        setGenRes,

        genResId,
        setGenResId,

        click,
        setClick,

        relatedMovie,
        setRelatedMovie,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PaginationContext;
