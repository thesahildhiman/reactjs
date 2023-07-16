import React, { useEffect, useState } from "react";

const AddVideo = ({ addVideo, editableVideo, updateVideo }) => {
  const [video, setVideo] = useState({ name: "", views: "" });

  // with useEffect-
  useEffect(() => {
    if (editableVideo) {
      setVideo({ ...editableVideo });
    }
  }, [editableVideo]);

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideo(video);
    }
    // here it is controlled form as it is controlled by input value
    setVideo({ name: "", views: "" });
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="name"
            value={video.name}
          />
        </div>
        <div>
          <input
            type="text"
            name="views"
            onChange={handleChange}
            placeholder="views"
            value={video.views}
          />
        </div>
        <button onClick={submit}>{editableVideo ? "update" : "add"}</button>
      </form>
    </>
  );
};

export default AddVideo;
