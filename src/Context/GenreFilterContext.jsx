import React, { createContext, useReducer } from "react";

export const Context = createContext();

const GenreFilterContext = ({ children }) => {
  const filter = (state, actionPayload) => {
    const filteredData = state.filter((data) => data === actionPayload); //filter the same data
    if (filteredData.length > 0) {
      const updatedData = state.filter((data) => data !== filteredData[0]); //filter not the same data
      return [...updatedData];
    }
    return [...state, actionPayload];
  };

  const genreReducer = (state, action) => {
    switch (action.type) {
      case "mal_id":
        return filter(state, action.payload);

      default:
        return state;
    }
  };

  const genreReducer1 = (state, action) => {
    switch (action.type) {
      case "name":
        return filter(state, action.payload);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(genreReducer, []);
  const [state1, dispatch1] = useReducer(genreReducer1, []);
  // console.log("state is", state);
  // console.log("state1 is", state1);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        state1,
        dispatch1,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GenreFilterContext;
