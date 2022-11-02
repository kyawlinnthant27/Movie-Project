import React from "react";
import { Routes, Route } from "react-router-dom";
import { SearchBar } from "./components";

// pages
import {
  HomeScreen,
  ActorScreen,
  MovieInformationScreen,
  SearchFeed,
} from "./pages";
// context

const App = () => {
  return (
    <div>
      <SearchBar />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movies/:id" element={<MovieInformationScreen />} />
          <Route path="/actors/:id" element={<ActorScreen />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
