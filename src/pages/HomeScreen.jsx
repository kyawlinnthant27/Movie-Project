import { Banner, Documentaries, TopRated, Trending } from "../components";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <TopRated />
      <Trending />
      <Documentaries />
    </>
  );
};

export default HomeScreen;
