import React from "react";
import MoviesCarousel from "./MoviesCarousel";
import { getTopRated } from "../utils/tmdbApi";
import { useQuery } from "@tanstack/react-query";

const TopRated = () => {
  const {
    isLoading,
    isError,
    error,
    data: topRatedMovie,
  } = useQuery(["topRated"], getTopRated);

  return <MoviesCarousel />;
};

export default TopRated;
