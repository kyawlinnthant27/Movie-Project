import React from "react";
import { Mutation, useMutation } from "@tanstack/react-query";
import { instance } from "../utils/tmdbApi";
import SearchBar from "./SearchBar";

const SearchFeed = () => {
  const [mutate, query] = useMutation((value) => {
    return (
      instance.get(
        `/search/movie?query=${value}&api_key=936badac4a507a8afb1b5766bc165f75`
      ),
      {
        searchParams: { query: value },
      }
    );
  });

  const onSubmit = async (value) => {
    return await mutate(value);
  };

  return <SearchBar onSubmit={onSubmit} />;
};

export default SearchFeed;
