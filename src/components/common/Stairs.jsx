import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const stairParent = useRef(null);
  const pageRef = useRef(null);
  const currentLocation = useLocation().pathname;
  console.log(currentLocation);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParent.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairParent.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      scale: 1.3,
      delay: 1.3,
    });
    gsap.to(pageRef.current, {
      opacity: 1,
      scale: 1,
      delay: 1.3,
    });
  }, [currentLocation]);
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
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
