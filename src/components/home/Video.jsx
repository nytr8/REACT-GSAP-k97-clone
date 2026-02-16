import React from "react";

const Video = () => {
  return (
    <div className="h-screen w-full">
      <video
        className="object-cover h-full w-full"
        autoPlay
        muted
        loop
        src="src/assets/homevideo.mp4"
      ></video>
    </div>
  );
};

export default Video;
