import React, { useRef } from "react";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";
import HomeBottomText from "../components/home/HomeBottomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const stairParent = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParent.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(stairParent.current, {
      display: "none",
    });
  });
  return (
    <div>
      <div ref={stairParent} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/6 bg-black"></div>
          <div className="stairs h-full w-1/6 bg-black"></div>
          <div className="stairs h-full w-1/6 bg-black"></div>
          <div className="stairs h-full w-1/6 bg-black"></div>
          <div className="stairs h-full w-1/6 bg-black"></div>
          <div className="stairs h-full w-1/6 bg-black"></div>
        </div>
      </div>
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
