import { useQuery } from "@tanstack/react-query";
import React from "react";
import instance from "../utils/axios.js";
import axios from "../utils/axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TopRated = ({ fetchUrl }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const { isLoading, error, data, isFetching } = useQuery([], () =>
    instance.get(fetchUrl).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data.results);

  return (
    <div div="flex ">
      {data.results.map((item) => (
        <div key={item.id} className="flex-col justify-between items-center">
          <div className="flex flex-1">
            <img
              src={`${base_url}${item.backdrop_path}`}
              alt="logo"
              className="w-[320px] h-[320px] object-contain"
            />
          </div>
          <h1 className="text-3xl font-medium text-green-300">{item.title}</h1>
          <p className="text-[14px] text-gray-100">{item.overview}</p>
        </div>
      ))}

      <ReactQueryDevtools initialIsOpen />
    </div>
  );
};

export default TopRated;
