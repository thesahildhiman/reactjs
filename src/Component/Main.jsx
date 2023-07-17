import React, { useReducer, useState } from "react";
import { videoData } from "../videosData";
import VideoList from "./VideoList";
import AddVideo from "./AddVideo";
import Dropdown from "./DropdownComp/Dropdown";
import FilterSearch from "./FilteredList/FilterSearch";

const Main = () => {
  // reducer- that takes current state and returns new state on basis of action type
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...videos,
          {
            ...action.payload,
            img: `https://picsum.photos/id/${
              Math.floor(Math.random() * 9) + 1
            }/200/300`,
            id: videos.length,
          },
        ];
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        return newVideos;
      case "DELETE":
        const remainingVideos = videos.filter(
          (video) => action.payload !== video.id
        );
        return remainingVideos;
      default:
        return videos;
    }
  };
  // removing state
  // const [videos, setvideos] = useState(videoData);
  // useReducer hook is used to handle complex state logic,,,
  // after manipulation of current state by videoReducer new state will be returned in videos
  const [videos, dispatch] = useReducer(videoReducer, videoData);
  const [editableVideo, setEditableVideo] = useState(null);
  const addVideo = (video) => {
    // setvideos([
    //   ...videos,
    //   {
    //     ...video,
    //     img: `https://picsum.photos/id/${
    //       Math.floor(Math.random() * 9) + 1
    //     }/200/300`,
    //     id: videos.length,
    //   },
    // ]);
    dispatch({ type: "ADD", payload: video });
  };

  const editVideo = (id) => {
    const video = videos.find((item) => item.id === id);
    setEditableVideo(video);
  };

  const updateVideo = (video) => {
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideos = [...videos];
    // newVideos.splice(index, 1, video);
    // console.log("---update---", newVideos);
    // setvideos(newVideos);
    dispatch({ type: "UPDATE", payload: video });
    setEditableVideo(null);
  };

  const deleteVideo = (id) => {
    console.log("---dele---", id);
    dispatch({ type: "DELETE", payload: id });
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
      <VideoList
        videoData={videos}
        editVideo={editVideo}
        deleteVideo={deleteVideo}
      />

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
