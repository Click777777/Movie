import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { Context } from "../../Context/PaginationContext";

const Genres = () => {
  const {
    setGenRes,
    setGenResId,
    setGenresCurrent,
    click,
    setClick,
    setSearchUrl,
    setInput,
  } = useContext(Context);
  const [type, setType] = useState(null);
  useEffect(() => {
    const url = "https://api.jikan.moe/v4/genres/anime";
    const fetchGenres = async () => {
      const res = await axios(url);
      setType(res.data);
    };
    fetchGenres();
  }, []);

  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  const clickHandler = async (id) => {
    const res = await axios(
      `https://api.jikan.moe/v4/anime?genres=${id}&page=1&order_by=score&sort=desc`
    );
    setInput(null);
    setSearchUrl(null);
    setClick(!click);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setGenRes(res.data);
    setGenresCurrent(1);
    setGenResId(id);
  };

  return (
    <>
      {!type && <Spinner />}
      <div className="container mx-auto my-10 min-h-screen">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {type &&
            type.data.map((i) => (
              <div
                key={i.mal_id}
                className=" cursor-pointer"
                onClick={() => clickHandler(i.mal_id)}
              >
                <p
                  style={{ color: randColor() }}
                  className=" flex p-4  bg-dry rounded-md text-base font-normal"
                >
                  {i.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
