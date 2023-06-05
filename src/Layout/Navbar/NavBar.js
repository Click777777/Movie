import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useProgressScroll from "../../CustomHook/useProgressScroll";

const NavBar = () => {
  const { completion } = useProgressScroll();
  const [menu, setMenu] = useState(false);
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain border-b" : hover);

  return (
    <div className="text-decoration-none fixed top-0 z-10 w-full bg-black backdrop-blur-sm ">
      <div className="container mx-auto grid grid-cols-7 items-center justify-between gap-4 p-4 lg:gap-10 ">
        <div className=" col-span-3 w-full md:col-span-2 ">
          <div className=" flex items-center gap-4 md:gap-8">
            {/* Mobile Menu */}
            <div
              className="flex cursor-pointer flex-col items-end space-y-1 md:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              <div className="h-1 w-6 rounded bg-white"></div>
              <div className="h-1 w-6 rounded bg-white"></div>
              <div className="h-1 w-6 rounded bg-white"></div>
            </div>

            <div className={menu ? "showMenu" : "hideMenu"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setMenu(false)}
              >
                <svg
                  className="h-8 w-8 cursor-pointer text-dryGray"
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
              <ul className="flex min-h-[250px] flex-col items-center justify-between gap-y-8">
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/search">
                    search
                  </NavLink>
                </li>
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/movie">
                    Movie
                  </NavLink>
                </li>
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/series">
                    series
                  </NavLink>
                </li>
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/about-us">
                    About
                  </NavLink>
                </li>
                <li className="  border-gray-400 uppercase">
                  <NavLink className={Hover} to="/contact-us">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* First Item (Logo)*/}
            <div className="min-w-[100px]">
              <Link
                to="/"
                className=" select-none text-base font-bold tracking-wider text-subMain md:text-lg"
              >
                MOVIE | HV
              </Link>
            </div>
          </div>
        </div>

        {/* Third Item (Nav Link) */}
        <div className="col-span-3 hidden w-full items-center justify-between text-sm font-medium md:flex ">
          <NavLink to="/search" className={Hover}>
            <p className="select-none capitalize 2xl:text-base xl3:text-xl">
              search
            </p>
          </NavLink>
          <NavLink to="/movie" className={Hover}>
            <p className="select-none capitalize 2xl:text-base xl3:text-xl">
              movie
            </p>
          </NavLink>
          <NavLink to="/series" className={Hover}>
            <p className="select-none capitalize 2xl:text-base xl3:text-xl">
              series
            </p>
          </NavLink>
          <NavLink to="/about-us" className={Hover}>
            <p className="select-none capitalize 2xl:text-base xl3:text-xl">
              about
            </p>
          </NavLink>
          <NavLink to="/contact-us" className={Hover}>
            <p className="select-none capitalize 2xl:text-base xl3:text-xl">
              contact
            </p>
          </NavLink>
        </div>

        <div className=" col-span-4 w-full md:col-span-2">
          <div className=" flex items-center justify-end gap-4 md:gap-6 ">
            {/* Login Button & singup  */}
            <button className=" py-2 px-3 text-sm font-medium text-white">
              <NavLink
                to="/login"
                className="select-none capitalize 2xl:text-base xl3:text-xl"
              >
                login
              </NavLink>
            </button>

            <button className=" rounded-sm bg-subMain py-2 px-3 text-xs font-semibold text-white">
              <NavLink
                to="/singup"
                className="select-none capitalize 2xl:text-base xl3:text-xl"
              >
                sing up
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      {/* progressBar */}
      <span
        className="absolute bottom-0 h-1 w-full bg-subMain"
        style={{ transform: `translateX(${completion - 100}%)` }}
      />
    </div>
  );
};

export default NavBar;
