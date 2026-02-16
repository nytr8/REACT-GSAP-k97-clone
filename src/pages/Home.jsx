import React from "react";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="fixed h-[90vh] w-full flex justify-center">
        <HomeHeroText />
      </div>
      <div className="h-screen w-full">
        <Video />
      </div>
      <div className="h-[10vh] w-full fixed bottom-10">
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
