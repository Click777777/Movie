import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-main text-white relative min-h-screen">
        <NavBar />
        {children}
        <div className=" lg:hidden">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
