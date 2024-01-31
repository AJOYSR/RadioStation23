

import React, { useRef } from "react";
import ReactPlayer from "react-player";

const AudioPlayer = ({ url, title, author, thumbnail }) => {
  const playerRef = useRef(null);

  return (
    <div>
      <ReactPlayer ref={playerRef} url={url} />
    </div>
  );
};

export default AudioPlayer;
