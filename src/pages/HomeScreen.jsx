import { Banner, Documentaries, TopRated, Trending } from "../components";

const HomeScreen = () => {
  return (
    <div className="w-full h-full bg-gray-500">
      <Banner />
      <TopRated />
      {/* <Trending /> */}
      {/* <Documentaries /> */}
    </div>
  );
};

export default HomeScreen;
