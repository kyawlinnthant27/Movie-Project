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

  return (
    <SearchBar
      onSubmit={async (value) => {
        await mutate(value);
      }}
    />
  );
};

export default SearchFeed;
