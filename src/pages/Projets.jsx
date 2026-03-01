import React, { useRef } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

const Projects = () => {
  const images = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
    },
  ];
  const greenBoxHover = useRef(null);
  const text = useRef(null);
  const greenBoxHover2 = useRef(null);
  const text2 = useRef(null);
  const navBox = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      height: "50px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });
  return (
    <div className="h-screen w-screen relative ">
      <div className="pt-80">
        <h2 className="text-black font-[lau2] uppercase">
          <span className=" text-[22vh]">projets</span>
          <sup className="font-[lau2] text-[4vh] align-top top-20">17</sup>
        </h2>
      </div>
      <Link
        to={"/agence"}
        ref={navBox}
        onMouseEnter={() => {
          greenBoxHover.current.style.height = "100%";
          text.current.style.color = "black";
        }}
        onMouseLeave={() => {
          greenBoxHover.current.style.height = "0%";
          text.current.style.color = "white";
        }}
        className="bg-black h-15 w-65 flex items-center right-[0%] -top-3 justify-end absolute z-40  "
      >
        <div
          ref={greenBoxHover}
          className="absolute transition-all bg-[#D3FD50] top-0 h-0 w-full"
        ></div>
        <div className="flex  h-2 w-1/2  flex-col justify-between  mr-8 relative">
          <p ref={text} className="uppercase text-[lau1]">
            agence
          </p>
        </div>
      </Link>
      <Link
        to={"/"}
        ref={navBox}
        onMouseEnter={() => {
          greenBoxHover2.current.style.height = "100%";
          text2.current.style.color = "black";
        }}
        onMouseLeave={() => {
          greenBoxHover2.current.style.height = "0%";
          text2.current.style.color = "white";
        }}
        className="bg-black h-15 w-50 flex items-center right-[13%] -top-7 justify-end absolute z-30  "
      >
        <div
          ref={greenBoxHover2}
          className="absolute transition-all bg-[#D3FD50] top-0 h-0 w-full"
        ></div>
        <div className="flex  h-2 w-1/2  flex-col justify-between  mr-8 relative">
          <p ref={text2} className="uppercase text-[lau1] pt-1">
            Home
          </p>
        </div>
      </Link>
      <div className="lol -mt-20 p-2 ">
        {images.map((elem) => {
          return (
            <div className="w-screen h-180 flex gap-2 pt-2 hero">
              <ProjectCard image1={elem.image1} image2={elem.image2} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
