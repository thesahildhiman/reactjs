import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videoData, editVideo }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      {videoData.map((video, idx) => {
        return (
          <VideoCard key={idx} video={video} editVideo={editVideo} id={idx} />
        );
      })}
    </div>
  );
};

export default VideoList;
