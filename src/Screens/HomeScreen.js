import React from "react";
import UpcomingMovie from "../Components/Home/Upcoming/UpcomingMovie";
import TopRated from "../Components/Home/TopRated/TopRated";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner/Banner";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="mb-6 min-h-screen w-full bg-main ">
        <Banner />
        <UpcomingMovie />
        <TopRated />
      </div>
    </Layout>
  );
};

export default HomeScreen;
