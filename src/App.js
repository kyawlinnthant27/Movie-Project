import React, { useContext } from "react";
import { useStateContext } from "./context/context";
import { Routes, Route } from "react-router-dom";

// components
import TopRated from "./components/TopRated";

// pages
import {
  HomeScreen,
  ActorScreen,
  MovieInformationScreen,
  ProfileScreen,
} from "./pages";
// utils
import requests from "./utils/Request";

const App = () => {
  const { initialState } = useStateContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movies/:id" element={<MovieInformationScreen />} />
        <Route path="/actors/:id" element={<ActorScreen />} />
        <Route path="/profile/:id" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
};

export default App;
