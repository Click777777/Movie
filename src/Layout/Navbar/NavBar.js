import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";

const NavBar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <div className="bg-black lg:opacity-70 shadow-md sticky top-0 z-20">
      {/* Grid */}
      <div className="container mx-auto py-4 px-2 grid lg:gap-10 grid-cols-7 justify-between items-center">
        {/* First Item (Logo)*/}
        <div className="col-span-1 hidden lg:block">
          <Link to="/">
            <img
              src="image/repairLogo.png"
              alt="Logo"
              className="w-full object-contain"
            />
          </Link>
        </div>
        {/* Second Item (Search bar) */}
        <div className="col-span-7 lg:col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4 ">
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-10 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search Movie Name From Here"
              className="font-medium placeholder:text-border text-sm w-11/12 h-10 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        {/* Third Item (Nav Link) */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between items-center lg:flex xl:justify-end">
          <NavLink to="/movies" className={Hover}>
            Movies
          </NavLink>
          <NavLink to="/about-us" className={Hover}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={Hover}>
            Contact Us
          </NavLink>
          <NavLink to="/movies" className={Hover}>
            <FaUser className="w-6 h-6" />
          </NavLink>
          <NavLink to="/movies" className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            <div className="bg-subMain w-5 h-5 flex-rows absolute -top-5 -right-1 rounded-full">
              3
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
