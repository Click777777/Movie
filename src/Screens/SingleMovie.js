import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfo from "../Components/MovieInfo";
import Footer from "../Layout/Footer/Footer";
import Layout from "../Layout/Layout";
import MovieCast from "../Components/MovieCast";
import MovieRate from "../Components/MovieRate";
import RelativeMovie from "../Components/RelativeMovie";
import Spinner from "../Components/Spinner";
import { Context } from "../Context/PaginationContext";

const SingleMovie = () => {
  const { relatedMovie, setRelatedMovie } = useContext(Context);
  const { id } = useParams();
  const [responseData, setResponseData] = useState(null);
  const [allMovie, setAllMovie] = useState(null);

  useEffect(() => {
    const fetchData = async (param) => {
      try {
        const response = await axios.get(param);
        // console.log("res Movie___", response.data.data);
        setResponseData(response.data.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData(param);
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    fetchData(`https://api.jikan.moe/v4/anime/${id}`);
  }, [id]);

  useEffect(() => {
    const fetchData = async (param) => {
      try {
        const response = await axios.get(param);
        setRelatedMovie(response.data.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData(param);
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    fetchData(`https://api.jikan.moe/v4/anime/${id}/full`);
  }, [id, setRelatedMovie]);

  let genresStored = relatedMovie?.genres
    .map((i) => `genres=${i.mal_id}`)
    .join("&");

  useEffect(() => {
    const fetchData = async (param) => {
      try {
        const response = await axios.get(param);
        setAllMovie(response.data.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData(param);
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    const data = `https://api.jikan.moe/v4/anime?${genresStored}&order_by=score&sort=desc`;
    if (genresStored) {
      fetchData(data);
    }
  }, [id, genresStored]);

  return (
    <Layout>
      {!responseData && <Spinner />}
      <div className=" container mx-auto px-2 py-6 min-h-screen">
        {responseData && (
          <MovieInfo
            singleMovie={responseData}
            myPath={`/watch/${responseData?.mal_id}`}
          />
        )}
        {(responseData || responseData?.airing) && (
          <MovieCast singleMovie={responseData} />
        )}
        {(responseData || responseData?.airing) && (
          <MovieRate singleMovie={responseData} />
        )}
        {relatedMovie && <RelativeMovie relatedMovie={allMovie} />}
      </div>
      <div className="w-full hidden lg:inline-block">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default SingleMovie;
