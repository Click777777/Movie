import React from "react";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import Promos from "../Components/Home/Promos";
import TopRated from "../Components/Home/TopRated";
import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="w-full bg-main min-h-screen mb-6 ">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
        <div className="w-full hidden lg:inline-block">
          <Footer></Footer>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
