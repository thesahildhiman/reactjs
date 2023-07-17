import React from "react";
const VideoCard = ({ video, editVideo, id, deleteVideo }) => {
  const handleEdit = () => {
    editVideo(id);
  };
  const handleDelete = () => {
    deleteVideo(id);
  };
  return (
    <div style={{ margin: "10px", border: "2px solid black" }}>
      <button style={{ position: "absolute" }} onClick={handleEdit}>
        edit
      </button>
      <button
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
