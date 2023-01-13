import React from "react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer/Footer";

const Movies = () => {
  return (
		<Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        Movies
      </div>
      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
	)
}

export default Movies;
