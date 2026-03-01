import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const FullscreenNav = ({ closeNav }) => {
  const cross1 = useRef();
  const cross2 = useRef();
  const crossBtn = useRef();
  const container = useRef();
  const rollContainer = useRef();
  useGSAP(() => {
    // Opening animation
    gsap.fromTo(
      container.current,
      { y: "-100%" },
      { y: "0%", duration: 0.8, ease: "power3.out" },
    );

    gsap.fromTo(
      crossBtn.current,
      { x: "100%" },
      { x: "0%", duration: 0.8, ease: "power3.out", delay: 0.3 },
    );
  }, []);

  const handleClose = () => {
    // Closing animation
    gsap.to(container.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power3.in",
      onComplete: closeNav, // unmount AFTER animation
    });
  };
  return (
    <div
      ref={container}
      className="h-full w-full leading-[0.9] bg-black flex items-center justify-center"
    >
      <div
        ref={crossBtn}
        onClick={handleClose}
        onMouseEnter={() => {
          cross1.current.style.backgroundColor = "#D3FD50";
          cross2.current.style.backgroundColor = "#D3FD50";
        }}
        onMouseLeave={() => {
          cross1.current.style.backgroundColor = "white";
          cross2.current.style.backgroundColor = "white";
        }}
        className="absolute hover:cursor-pointer translate-x-[120%] right-5 top-2 h-30 w-30 p-10 flex items-center justify-center"
      >
        <div
          ref={cross1}
          className="bg-white transition-all h-40 rounded-xl w-0.5 rotate-45"
        ></div>
        <div
          ref={cross2}
          className="bg-white transition-all  h-40 rounded-xl w-0.5 -rotate-45"
        ></div>
      </div>
      <div className="flex flex-col w-full ">
        <div ref={rollContainer} className="w-full relative group">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b border-t ">
            projets
          </h1>
          <Link
            to={"/projets"}
            className="bg-[#D3FD50] absolute top-0 left-0 w-full overflow-x-auto text-black no-scrollbar hidden group-hover:flex "
          >
            <div className="roll whitespace-nowrap min-w-max pt-1 animate-marquee">
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
            </div>
          </Link>
        </div>
        <div ref={rollContainer} className="w-full relative group">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b border-t ">
            agence
          </h1>
          <Link
            to={"/agence"}
            className="bg-[#D3FD50] absolute top-0 left-0 w-full overflow-x-auto text-black no-scrollbar hidden group-hover:flex "
          >
            <div className="roll whitespace-nowrap min-w-max pt-1 animate-marquee">
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
            </div>
          </Link>
        </div>
        <div ref={rollContainer} className="w-full relative group">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b border-t ">
            Home
          </h1>
          <Link
            to={"/"}
            className="bg-[#D3FD50] absolute top-0 left-0 w-full overflow-x-auto text-black no-scrollbar hidden group-hover:flex "
          >
            <div className="roll whitespace-nowrap min-w-max pt-1 animate-marquee">
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
              <span className="text-[150px] w-60 h-25 font-[lau2] uppercase inline-block px-2 ">
                <img
                  className="w-full h-full object-cover object-[0%_20%] rounded-[50px] "
                  src="src/assets/parl.jpg"
                  alt="#"
                />
              </span>
              <span className="text-[150px] font-[lau2] uppercase inline-block px-2">
                Pour tout voir
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullscreenNav;
