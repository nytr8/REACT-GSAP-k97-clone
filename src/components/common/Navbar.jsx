import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import FullscreenNav from "./FullscreenNav";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const greenBoxHover = useRef(null);
  const lines1 = useRef(null);
  const lines2 = useRef(null);
  const navBox = useRef(null);
  const fullNav = useRef(null);
  const [checker, setchecker] = useState(false);
  const currentLocation = useLocation().pathname;
  console.log(currentLocation);
  useGSAP(() => {
    gsap.to(fullNav.current, {
      stagger: 1,
      duration: 1,
      delay: 1,
    });
  }, [checker]);
  useEffect(() => {
    setchecker(false);
  }, [currentLocation]);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-between p-0 z-30">
        <Link to={"/"} className="p-2 border-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="60"
            viewBox="0 0 103 44"
          >
            <path
              fill={
                currentLocation != "/agence" && currentLocation != "/projets"
                  ? "white"
                  : "black"
              }
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
        {!checker ? (
          <div
            onClick={() => {
              setchecker(!checker);
            }}
            ref={navBox}
            onMouseEnter={() => {
              greenBoxHover.current.style.height = "100%";
              lines1.current.style.backgroundColor = "black";
              lines2.current.style.backgroundColor = "black";
            }}
            onMouseLeave={() => {
              greenBoxHover.current.style.height = "0%";
              lines1.current.style.backgroundColor = "white";
              lines2.current.style.backgroundColor = "white";
            }}
            className="bg-black h-15 w-70 flex items-center justify-end relative  "
          >
            <div
              ref={greenBoxHover}
              className="absolute transition-all bg-[#D3FD50] top-0 h-0 w-full"
            ></div>
            <div className="flex h-2 w-1/2  flex-col justify-between items-end mr-8 relative">
              <p
                ref={lines1}
                className=" transition-all bg-white h-0.5 w-15"
              ></p>
              <p
                ref={lines2}
                className=" transition-all bg-white h-0.5 w-8"
              ></p>
            </div>
          </div>
        ) : (
          <div ref={fullNav} className="absolute z-25 h-screen w-screen">
            {checker && <FullscreenNav closeNav={() => setchecker(false)} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
