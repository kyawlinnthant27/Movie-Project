import React from "react";
import { base_url } from "../utils/tmdbApi";

const MoviesCarousel = ({ data, error, loading }) => {
  if (loading) return <p>loading..</p>;
  if (error) return console.log(error.message);
  console.log(data);
  return (
    <div className="">
      {data?.map((movie) => (
        <div className="w-[500px] h-[500px]">
          <h1 className="font-2xl font-bold">{movie?.title}</h1>
          <img
            src={`${base_url}${movie?.backdrop_path}`}
            alt="cover"
            className="h-[300px] w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesCarousel;
