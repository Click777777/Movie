import React from "react";
import UpcomingMovie from "../Components/Home/Upcoming/UpcomingMovie";
import TopRated from "../Components/Home/TopRated/TopRated";
import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner/Banner";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="w-full bg-main min-h-screen mb-6 ">
        <Banner />
        <UpcomingMovie />
        <TopRated />
        <div className="w-full hidden lg:inline-block">
          <Footer></Footer>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
