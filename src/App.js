import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import { HomeScreen, ActorScreen, MovieInformationScreen } from "./pages";
import { SearchFeed } from "./components";
// context

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movies/:id" element={<MovieInformationScreen />} />
        <Route path="/actors/:id" element={<ActorScreen />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export default App;
