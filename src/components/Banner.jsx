import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBannerData } from "../utils/tmdbApi";

const Banner = () => {
  const {
    isLoading,
    isError,
    error,
    data: movies,
  } = useQuery(["originalMovies"], getBannerData);

  console.log(movies);

  return <div>Banner</div>;
};

export default Banner;
