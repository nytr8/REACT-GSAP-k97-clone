import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="group relative h-full w-1/2 overflow-hidden transition-all ease-in-out duration-300 hover:rounded-[40px] ">
        <img
          className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-[1.03] "
          src={image1}
          alt=""
        />
        <div className="opacity-0 transition-all ease-in-out duration-300 absolute group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full">
          <h1 className="text-7xl border p-2 px-5 rounded-[50px] uppercase ">
            view project
          </h1>
        </div>
      </div>
      <div className="group relative h-full w-1/2 overflow-hidden transition-all ease-in-out duration-300 hover:rounded-[40px] ">
        <img
          className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-[1.03] "
          src={image2}
          alt=""
        />
        <div className="opacity-0 transition-all ease-in-out duration-300 absolute group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full">
          <h1 className="text-7xl border p-2 px-5 rounded-[50px] uppercase ">
            view project
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
