import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import Layout from "../../Layout/Layout";
import { SideLink } from "./SildeLink";

const SideBar = ({ children, toggle }) => {
  const inActive =
    "flex items-center gap-3 text-sm font-medium p-4 rounded transition-all";
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const Hover = ({ isActive }) => {
    return isActive ? `${inActive} ${active} ` : ` ${inActive} ${hover}`;
  };

  const full = toggle
    ? "col-span-8 rounded-md bg-dry p-2 md:p-6 border border-gray-800"
    : "col-span-6 rounded-md bg-dry p-2 md:p-6 border border-gray-800";
  const hidd = toggle ? "hidden" : "";

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 pt-[88px] min-h-screen overflow-scroll">
        <div className=" relative items-start grid-cols-8 gap-10 xl:grid">
          <div
            className={`col-span-2 sticky bg-dry border border-gray-800 p-6 mb-5 rounded-md xl:mb-0 ${hidd}`}
          >
            {SideLink.map((link, index) => (
              <NavLink to={link.link} key={index} className={Hover}>
                <link.icon />
                <p>{link.name}</p>
              </NavLink>
            ))}
          </div>

          <div className={`${full} `}>{children}</div>
        </div>
      </div>
      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default SideBar;
