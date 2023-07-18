import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
const VideoCard = ({ video, editVideo, id, deleteVideo }) => {
  const handleEdit = () => {
    editVideo(id);
  };
  const handleDelete = () => {
    deleteVideo(id);
  };

  const darkMode = useContext(ThemeContext);
  return (
    <div
      className={darkMode ? "dark" : "light"}
      style={{
        margin: "10px",
      }}
    >
      <button
        className={darkMode ? "dark" : "light"}
        style={{ position: "absolute" }}
        onClick={handleEdit}
      >
        edit
      </button>
      <button
        className={darkMode ? "dark" : "light"}
        style={{ position: "absolute", marginLeft: "40px" }}
        onClick={handleDelete}
      >
        X
      </button>
      <img src={video.img} style={{ width: "200px", height: "100px" }} />
      <p>{video.name}</p>
      <p>{video.views}</p>
    </div>
  );
};

export default VideoCard;
