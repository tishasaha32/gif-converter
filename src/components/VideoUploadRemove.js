import React, { useState } from "react";
import styles from "./VideoUploadRemove.module.css";
import VideoCutEdit from "./VideoCutEdit";
import VideoToGif from "./VideoToGif";

function VideoUploadRemove() {
  const [video, setVideo] = useState();
  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideo(file);
    console.log("Selected file:", file);
  };

  const handleRemoveButton = () => {
    setVideo();
  };

  return (
    <div>
      <div className={styles.VideoUploadContainer}>
        <div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="video/*"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <div className={styles.buttonContainer}>
              <button
                onClick={handleFileUpload}
                disabled={video != null}
                className={styles.button}
              >
                Upload Video
              </button>
              <button
                onClick={handleRemoveButton}
                disabled={!video}
                className={styles.button}
              >
                Remove Video
              </button>
            </div>
          </label>
        </div>
        <div className={styles.videoContainer}>
          {video ? (
            <video className={styles.video} controls>
              <source src={URL.createObjectURL(video)} />
            </video>
          ) : (
            <div className={styles.video}>Your video will be shown here</div>
          )}
        </div>
      </div>
      <div>{video && <VideoToGif video={video} />}</div>
    </div>
  );
}

export default VideoUploadRemove;
