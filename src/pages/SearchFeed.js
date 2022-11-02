import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url, instance } from "../utils/tmdbApi";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  console.log(searchTerm);
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(
        `/search/movie?query=${searchTerm}&page=${page}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
      );
      setMovies(response?.data?.results);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {movies?.map((movie) => (
        <div className="flex flex-col bg-white max-w-2xl shadow-md p-4 mt-5">
          <div className="w-[90%] mb-3">
            <img
              src={`${base_url}${movie.poster_path}`}
              alt="cover"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-bold font-2xl font-base text-black">
            {movie?.title || "no title"}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default SearchFeed;
