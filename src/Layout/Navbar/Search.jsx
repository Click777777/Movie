import React, { useState, useRef, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Context } from "../../Context/PaginationContext";
import { useNavigate } from "react-router-dom";

const Search = ({ buttonFun }) => {
  const navigate = useNavigate();
  const { input, setInput, setSearchUrl, setSearchCurrent } =
    useContext(Context);
  const inputSearch = useRef();
  const [value, setValue] = useState("");

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const fetchData = async (value) => {
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${value}&order_by=score&sort=desc`
      );
      const data = res.data;
      setSearchUrl(`https://api.jikan.moe/v4/anime?q=${value}`);
      setInput(data);
    } catch (error) {
      if (error.response.status === 429) {
        console.log("Too many requests, waiting for 5 seconds...");
        setTimeout(() => {
          fetchData(value);
        }, 3000);
      } else {
        console.log(error);
      }
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const obSubmit = (e) => {
    e.preventDefault();
    navigate("/movies");
    setInput(null);
    buttonFun();
    const value = inputSearch.current.value;
    if (value === "") {
      return;
    }
    fetchData(value);
    setSearchCurrent(1);
    setValue("");
    inputSearch.current.value = "";
  };

  return (
    <>
      <form
        className="container  mx-auto  text-sm bg-dryGray rounded flex-btn gap-4 "
        onSubmit={obSubmit}
      >
        <input
          ref={inputSearch}
          onChange={onChange}
          type="search"
          value={value}
          placeholder="Search Movie Name From Here"
          className="font-medium placeholder:text-border text-sm w-11/12 h-8 bg-transparent border-none p-6 text-black"
        />

        <button
          type="submit"
          className="bg-subMain w-12 flex-colo h-12 rounded text-white order-last"
        >
          <FaSearch />
        </button>
      </form>

      <div className=" ">
        <div className=" py-6">
          {input &&
            input.data.slice(0, 5).map((i) => (
              <div
                key={i.mal_id}
                className="cursor-pointer font-medium text-base tracking-wide text-text truncate py-2"
              >
                <p onClick={() => setValue(i.title)}>{i.title}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
