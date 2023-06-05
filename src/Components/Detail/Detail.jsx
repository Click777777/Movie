import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHook/useFetch";
import MovieInfo from "./MovieInfo";
import MovieDetail from "./MovieDetail";
import Recommand from "./Recommand";
import axios from "axios";

const Detail = () => {
  const [fetchData, setFetchData] = useState("");
  const { id } = useParams();
  const { data } = useFetch(`https://api.jikan.moe/v4/anime/${id}/full`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/recommendations`
        );
        setFetchData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data, id]);

  return (
    <>
      {data && (
        <Layout>
          <div
            className=" container relative mx-auto mt-[64px] bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage: `url(${data.data.images.jpg.large_image_url})`,
            }}
          >
            <div className="min-h-screen p-4 pt-[34px] backdrop-blur-2xl">
              <div className=" grid grid-cols-9 gap-8 ">
                <div className="col-span-9 flex justify-center sm:col-span-3 sm:block lg:col-span-2 lg2:col-span-2">
                  {/* Image  */}
                  <div className=" h-[266px] w-[180px] object-cover ">
                    <img
                      src={data.data.images.jpg.image_url}
                      alt={data.data.title_english}
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <div className="col-span-9 sm:col-span-6 lg:col-span-7 lg2:col-span-5">
                  {/* Movie detail list */}
                  <MovieInfo data={data} />
                </div>

                <div className="col-span-9 bg-[#5F676F] bg-opacity-30 p-5 lg2:col-span-2">
                  <MovieDetail data={data} />
                </div>
              </div>
            </div>
          </div>

          <Recommand recommand={fetchData} />
        </Layout>
      )}
    </>
  );
};

export default Detail;
