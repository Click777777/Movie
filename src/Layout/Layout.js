import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" relative flex min-h-screen flex-col justify-between bg-main text-white">
        <NavBar />
        {children}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
