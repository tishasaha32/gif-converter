import React, { useState } from "react";
import gifshot from "gifshot";
import styles from "./VideoToGif.module.css";

const VideoToGifConverter = ({ video }) => {
  const [gifUrl, setGifUrl] = useState(null);
  const inputVideoUrl = video;
  console.log(inputVideoUrl);
  const handleClick = () => {
    const outputGifOptions = {
      video: inputVideoUrl,
      numFrames: 15,
      frameDuration: 0.1,
      gifWidth: 300,
      gifHeight: 500,
    };

    gifshot.createGIF(outputGifOptions, (obj) => {
      if (!obj.error) {
        const { image } = obj;
        console.log("Generated GIF:", image);
        setGifUrl(image);
      } else {
        console.error("Error generating GIF:", obj.error);
      }
    });
  };

  const handleDownload = () => {
    if (gifUrl) {
      const a = document.createElement("a");
      a.href = gifUrl;
      a.download = "generated.gif";
      a.click();
    }
  };

  return (
    <div className={styles.videoToGifContainer}>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} className={styles.button}>
          Convert to GIF
        </button>
        <button
          onClick={handleDownload}
          disabled={!gifUrl}
          className={styles.button}
        >
          Download
        </button>
      </div>
      <div>{gifUrl && <img src={gifUrl} alt="Generated GIF" />}</div>
    </div>
  );
};

export default VideoToGifConverter;
