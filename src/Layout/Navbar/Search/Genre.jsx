import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../Context/GenreFilterContext";

const Genre = ({ item }) => {
  const { dispatch, dispatch1 } = useContext(Context);
  const [isSelect, setIsSelect] = useState(() => {
    const storedValue = localStorage.getItem(`isSelect_${item.mal_id}`);
    return storedValue ? JSON.parse(storedValue) : null;
  });

  const handleClick = () => {
    setIsSelect(!isSelect);
    dispatch({ type: "mal_id", payload: item.mal_id });
    dispatch1({ type: "name", payload: item.name });
  };

  useEffect(() => {
    localStorage.setItem(`isSelect_${item.mal_id}`, JSON.stringify(isSelect));
  }, [isSelect, item.mal_id]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem(`isSelect_${item.mal_id}`);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [item.mal_id]);

  return (
    <div>
      <p
        className={`${
          isSelect ? "border-subMain text-subMain" : "border-star text-text"
        } min-w-min cursor-pointer rounded-md border bg-transparent px-4 py-2 text-xs`}
        onClick={handleClick}
      >
        {item.name}
      </p>
    </div>
  );
};

export default Genre;
