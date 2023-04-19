import React, { useState, useEffect } from "react";
import Title from "./Title";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "./ReviewForm";
import Star from "./Star";
import axios from "axios";

const MovieRate = ({ singleMovie }) => {
  const [rating, setRating] = useState("");
  let reviewAnime = ` https://api.jikan.moe/v4/anime/${singleMovie.mal_id}/reviews`;
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(reviewAnime);
        setResponseData(response.data);
      } catch (error) {
        if (error.response.status === 429) {
          console.log("Too many requests, waiting for 5 seconds...");
          setTimeout(() => {
            fetchData();
          }, 3000);
        } else {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [reviewAnime]);

  const Rating = [
    {
      title: "Poor",
      value: 0.5,
    },
    {
      title: "Fair",
      value: 1,
    },
    {
      title: "Good",
      value: 2,
    },
    {
      title: "Excellent",
      value: 3,
    },
    {
      title: "Epic",
      value: 4,
    },
    {
      title: "Masterpiece",
      value: 5,
    },
  ];
  return (
    <>
      {responseData && responseData.status === 404 ? null : (
        <div className="my-12">
          <Title Icon={BsBookmarkStarFill} title="Reviews" />
          {/* Container */}
          <div className=" flex-colo !items-start grid-cols-5 gap-12 bg-dry mt-10 py-10 px-2 rounded xs:p-10 sm:p-20 xl:grid ">
            {/* Client Comment & Rating */}
            <div className="w-full flex flex-col gap-8 xl:col-span-2">
              <h3 className="text-xl text-text font-semibold">
                {/* {singleMovie.title_english} */}
                {singleMovie.title_english
                  ? singleMovie.title_english
                  : singleMovie.title
                  ? singleMovie.title
                  : singleMovie.title_japanese}
              </h3>
              <p className=" text-sm leading-7 font-medium text-border">
                Write a honest review for this movie. I will post on this page.
              </p>

              <div className="text-base w-full">
                <Select
                  label=" Rating"
                  option={Rating}
                  onChange={(e) => setRating(e.target.value)}
                  value="0"
                />
                <div className=" flex mt-4 text-lg gap-2 text-star">
                  <Star value={rating} />
                </div>
              </div>

              <Message label="Message" placeholder="Comment here!" />
              <button className="bg-subMain text-white py-3 flex-colo rounded w-full">
                Sumit
              </button>
            </div>
            {/* Clinet Review */}
            {!responseData && null}
            {/* {!responseData?.data && <Spinner />} */}
            {!responseData || responseData?.data.length === 0 ? null : (
              <div className=" col-span-3 flex flex-col gap-6">
                <h3 className="text-text font-semibold text-xl">
                  Review ( {responseData?.data.length} )
                </h3>
                <div className="w-full flex flex-col bg-main p-6 gap-6 rounded-lg h-header overflow-y-scroll md:p-12 ">
                  {responseData &&
                    responseData.data.map((mapArr, index) => (
                      <div
                        key={index}
                        className=" w-full flex flex-col grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg md:grid "
                      >
                        <div className="col-span-2 bg-main hidden lg:inline-block">
                          <img
                            src={mapArr.user.images.webp.image_url}
                            alt="imgErr"
                            className="w-full object-cover rounded-lg h-24 "
                          />
                        </div>

                        <div className="col-span-7 flex flex-col overflow-y-scroll h-24 description">
                          <div className=" space-y-3">
                            <div className=" flex flex-row items-center space-x-3 lg:hidden">
                              <img
                                src={mapArr.user.images.webp.image_url}
                                alt="imgErr"
                                className="w-8 object-cover rounded-full h-8 border border-white"
                              />
                              <h2>{mapArr.user.username}</h2>
                            </div>
                            <h2 className=" hidden lg:inline-block">
                              {mapArr.user.username}
                            </h2>
                            <p className="text-xs text-subMain font-medium leading-6">
                              {mapArr.tags[0]}
                            </p>
                          </div>
                          <p className="text-xs text-text font-medium leading-6">
                            {mapArr.review}
                          </p>
                        </div>

                        <div className=" flex-rows col-span-3 border-l border-border gap-1 text-xs text-star">
                          <Star value={Math.random() * 10} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieRate;
