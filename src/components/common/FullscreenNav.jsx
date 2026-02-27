import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const FullscreenNav = () => {
  const cross1 = useRef();
  const cross2 = useRef();
  const crossBtn = useRef();
  const [btn, setbtn] = useState(true);
  useGSAP(
    () => {
      gsap.to(crossBtn.current, {
        x: btn ? "-10%" : "0%",
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { dependencies: [btn] },
  );
  return (
    <div className="h-full w-full leading-[0.9] bg-black flex items-center justify-center overflow-hidden">
      <div
        onClick={() => setbtn(!btn)}
        ref={crossBtn}
        onMouseEnter={() => {
          cross1.current.style.backgroundColor = "#D3FD50";
          cross2.current.style.backgroundColor = "#D3FD50";
        }}
        onMouseLeave={() => {
          cross1.current.style.backgroundColor = "white";
          cross2.current.style.backgroundColor = "white";
        }}
        className="absolute hover:cursor-pointer bg-red-700 translate-x-[120%] right-5 top-2 h-30 w-30 p-10 flex items-center justify-center"
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
      <div className="flex flex-col w-full">
        <div className="w-full">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b border-t">
            projets
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b">
            agence
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b">
            contact
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-[150px] p-0 font-[lau2] uppercase text-center border-b">
            blogue
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FullscreenNav;
