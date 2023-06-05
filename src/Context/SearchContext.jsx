import React, { createContext, useReducer } from "react";

export const SearchAnimeContext = createContext();

const SearchContext = ({ children }) => {
  const searchReducer = (state, action) => {
    switch (action.type) {
      case "submitSearch":
        return { search: action.payload };

      default:
        return state;
    }
  };

  const searchReducer1 = (state, action) => {
    switch (action.type) {
      case "renderData":
        return { search: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(searchReducer, { search: null });
  const [state1, dispatch1] = useReducer(searchReducer1, { search: null });
  // console.log("1st", state);
  // console.log("2nd", state1);

  return (
    <SearchAnimeContext.Provider value={{ state, dispatch, state1, dispatch1 }}>
      {children}
    </SearchAnimeContext.Provider>
  );
};

export default SearchContext;
