import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="absolute flex flex-col items-center justify-start font-[lau1]">
      <div className="uppercase text-[9vw] leading-[0.95]">L'étincelle</div>
      <div className="uppercase text-[9vw] leading-[0.95] flex">
        qui
        <div className="h-[15vh] w-[16vw] rounded-full  overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="uppercase text-[9vw] leading-[0.95]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
