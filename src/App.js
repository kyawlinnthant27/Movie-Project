import React, { useContext } from "react";
import { useStateContext } from "./context/context";
import { Routes, Route } from "react-router-dom";

// pages
import {
  HomeScreen,
  ActorScreen,
  MovieInformationScreen,
  ProfileScreen,
} from "./pages";

const App = () => {
  const { initialState } = useStateContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movies/:id" element={<MovieInformationScreen />} />
        <Route path="/actors/:id" element={<ActorScreen />} />
      </Routes>
    </div>
  );
};

export default App;
