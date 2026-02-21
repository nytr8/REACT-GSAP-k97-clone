import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="object-cover object-center h-full w-full"
        autoPlay
        muted
        loop
        src="src/assets/homevideo.mp4"
      ></video>
    </div>
  );
};

export default Video;
