import React from "react";
import MoviesCarousel from "./MoviesCarousel";
import {
  getTopRated,
  getDocumentary,
  base_url,
  getMovieDetail,
} from "../utils/tmdbApi";
import { useQuery } from "@tanstack/react-query";

const TopRated = () => {
  // const moviesId = 234;
  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: moviedetail,
  // } = useQuery(["detail", moviesId], () => getMovieDetail(moviesId));

  // console.log(moviedetail?.data);
  const {
    isLoading,
    isError,
    error,
    data: topRatedMovie,
  } = useQuery(["detail"], getTopRated);

  // console.log(moviedetail?.data);
  return (
    <MoviesCarousel
      data={topRatedMovie?.data?.results}
      error={isError}
      loading={isLoading}
    />
  );
};

export default TopRated;
