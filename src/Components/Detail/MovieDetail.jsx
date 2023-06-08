import React from "react";

const MovieDetail = ({ data }) => {
  const formatDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // just like 2020
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month from 1 to 12 // january is 0 so add 1

    let season;
    if (currentMonth >= 3 && currentMonth <= 5) {
      season = "spring";
    } else if (currentMonth >= 6 && currentMonth <= 8) {
      season = "summer";
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      season = "fall";
    } else {
      season = "winter";
    }
    const convertedData = `${season} ${year}`;
    return convertedData;
  };

  const producers = data?.data.producers.map((item) => item.name);
  const producer = producers.join(", ");

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">japanese:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {data.data.title_japanese}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Synonyms:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {data.data.titles[0].title}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Aired:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {data.data.aired.string}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Premiered:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {formatDate(data.data.aired.from)}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Duration:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {data.data.duration}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Status:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {data.data.status}
        </span>
      </div>

      {data.data.score && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-normal capitalize">MAL Score:</span>
          <span className=" text-sm font-thin capitalize text-white opacity-80">
            {data.data.score}
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Popularity:</span>
        <span className=" text-sm font-thin capitalize text-white opacity-80">
          {data.data.popularity}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Genres:</span>
        <span className=" text-sm font-thin capitalize text-white opacity-80">
          <div className="flex flex-wrap gap-2">
            {data.data.genres.map((item) => (
              <div
                className=" rounded-full border border-white px-2 py-1"
                key={item.mal_id}
              >
                {item.name}
              </div>
            ))}
          </div>
        </span>
      </div>

      {data.data.studios.lenght && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-normal capitalize">Studios:</span>
          <span className=" text-sm font-thin capitalize text-white opacity-80">
            {data.data.studios[0].name}
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-normal capitalize">Producers:</span>
        <span className="  text-sm font-thin capitalize text-white opacity-80">
          {producer}
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
