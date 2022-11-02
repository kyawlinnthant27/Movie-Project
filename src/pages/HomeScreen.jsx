import { Banner, Documentaries, TopRated, SearchBar } from "../components";

const HomeScreen = () => {
  return (
    <div className="w-full h-full bg-gray-500">
      <SearchBar />
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
