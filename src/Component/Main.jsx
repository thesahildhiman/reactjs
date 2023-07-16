import React, { useState } from "react";
import { videoData } from "../videosData";
import VideoList from "./VideoList";
import AddVideo from "./AddVideo";
import Dropdown from "./DropdownComp/Dropdown";
import FilterSearch from "./FilteredList/FilterSearch";
const Main = () => {
  const [videos, setvideos] = useState(videoData);
  const [editableVideo, setEditableVideo] = useState(null);
  const addVideo = (video) => {
    setvideos([
      ...videos,
      {
        ...video,
        img: `https://picsum.photos/id/${
          Math.floor(Math.random() * 9) + 1
        }/200/300`,
        id: videos.length,
      },
    ]);
  };

  const editVideo = (id) => {
    const video = videos.find((item) => item.id === id);
    setEditableVideo(video);
  };

  const updateVideo = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    console.log("---update---", newVideos);
    setvideos(newVideos);
    setEditableVideo(null);
  };

  console.log("--edit vvv--", editableVideo);
  return (
    <>
      {/* passing function as prop- called lifting up state, means this function executes here and catches data from child component */}
      <AddVideo
        addVideo={addVideo}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      />
      <VideoList videoData={videos} editVideo={editVideo} />

      {/* dropdown */}
      <hr />
      <div>
        <Dropdown />
      </div>

      {/* filter search */}
      <hr />
      <div>
        <FilterSearch />
      </div>
    </>
  );
};

export default Main;
