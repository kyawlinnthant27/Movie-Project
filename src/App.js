import React, { useContext } from "react";
import { useStateContext } from "./context/context";
import TopRated from "./components/TopRated";
import requests from "./utils/Request";

const App = () => {
  const { initialState } = useStateContext();
  return (
    <div className="flex flex-col bg-gray-400">
      <TopRated fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default App;
