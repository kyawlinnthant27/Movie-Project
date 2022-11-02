import { Banner, Documentaries, TopRated } from "../components";
import SearchFeed from "./SearchFeed";

const HomeScreen = () => {
  return (
    <div className="w-full h-full bg-gray-500">
      <SearchFeed />
      <div className="">
        <Banner />
        <TopRated />
        {/* <Trending /> */}
        {/* <Documentaries /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
