import React from "react";
import { base_url } from "../utils/tmdbApi";
import { useNavigate } from "react-router-dom";

const MoviesCarousel = ({ data, error, loading }) => {
  const navigate = useNavigate();

  if (loading) return <p>loading..</p>;
  if (error) return console.log(error.message);

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  return (
    <div className="">
      {data?.map((movie) => (
        <div className="w-[500px] h-[500px]">
          <h1
            className="font-3xl font-bold cursor-pointer hover:bg-green-50"
            onClick={() => handleClick(movie.id)}
          >
            {movie?.title}
          </h1>
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
