import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import Search from "./Search";

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [closeSearchBar, setCloseSearchBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const buttonFun = () => {
    setShowSearchBar(!showSearchBar);
    setCloseSearchBar(!closeSearchBar);
  };

  return (
    <div className="fixed bg-black backdrop-blur-sm z-10 top-0 w-full">
      <div className="container mx-auto p-4 grid gap-4 lg:gap-10 grid-cols-7 justify-between items-center ">
        <div className=" w-full col-span-4 md:col-span-2 ">
          <div className=" flex gap-4 items-center md:gap-8">
            {/* Mobile Menu */}
            <div
              className="space-y-1 cursor-pointer flex flex-col items-end md:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              <div className="h-1 w-6 bg-white rounded"></div>
              <div className="h-1 w-6 bg-white rounded"></div>
              <div className="h-1 w-6 bg-white rounded"></div>
            </div>

            <div className={menu ? "showMenu" : "hideMenu"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setMenu(false)}
              >
                <svg
                  className="h-8 w-8 text-dryGray cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink className={Hover} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink className={Hover} to="/movies">
                    Movie
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink className={Hover} to="/about-us">
                    About
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink className={Hover} to="/contact-us">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* First Item (Logo)*/}
            <div className="w-full">
              <Link
                to="/"
                className=" text-subMain text-lg tracking-wider font-bold select-none"
              >
                MOVIE | HV
              </Link>
            </div>
          </div>
        </div>

        {/* Third Item (Nav Link) */}
        <div className="w-full col-span-3 font-medium text-sm hidden justify-between items-center md:flex ">
          <NavLink to="/movies" className={Hover}>
            <p className="2xl:text-base xl3:text-xl select-none">Movies</p>
          </NavLink>
          <NavLink to="/about-us" className={Hover}>
            <p className="2xl:text-base xl3:text-xl select-none">About Us</p>
          </NavLink>
          <NavLink to="/contact-us" className={Hover}>
            <p className="2xl:text-base xl3:text-xl select-none">Contact Us</p>
          </NavLink>
          <NavLink to="/profile" className={Hover}>
            <FaUser className="w-5 h-5" />
          </NavLink>
          <NavLink to="/favourite" className={`${Hover} relative select-none`}>
            <FaHeart className="w-5 h-5" />
            <div className="bg-subMain w-5 h-5 flex-rows absolute -top-5 -right-3 rounded-full">
              <p className=" text-xs pr-[2px]">25</p>
            </div>
          </NavLink>
        </div>

        <div className=" w-full col-span-3 md:col-span-2">
          <div className=" flex items-center justify-end gap-4 md:gap-8 ">
            {/* Second Item (Search bar) */}
            <div className="col-span-1 lg:col-span-3 flex justify-end">
              {showSearchBar && (
                <ImSearch
                  className=" select-none"
                  onClick={() => buttonFun()}
                />
              )}
              {closeSearchBar && (
                <AiOutlineClose
                  className="select-none"
                  onClick={() => buttonFun()}
                />
              )}
            </div>
            {/* Login Button  */}
            <button className=" py-2 px-3 bg-subMain rounded-sm text-xs text-white font-thin">
              <NavLink
                to="/login"
                className="2xl:text-base xl3:text-xl select-none"
              >
                Log In
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      {closeSearchBar && (
        <div className=" w-full pb-2 px-2 md:px-4 md:pb-4">
          <div className=" bg-gray-900 p-6 rounded-sm min-h-[100vh] ">
            <Search buttonFun={buttonFun} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
