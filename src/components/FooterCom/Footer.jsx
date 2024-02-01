/* The code is defining a functional component called `Footer` in JavaScript React. */
/* The code is defining a functional component called `Footer` in JavaScript React. */
import React, { useState } from "react";
import { iconsImgs } from "../../utils/images";
import ReactPlayer from "react-player";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVolumeChange = (e) => {
    const validVolume = e.target.value;
    setVolume(validVolume);
  };

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const handleProgress = (state) => {
    setDuration(state.duration);
  };

  return (
    <div className="footer p-2 bg-blue-600 fixed bottom-0 w-full flex items-center">
      <button
        className="flex items-center gap-2 text-white px-4 py-2 underline-green-500 hover:underline"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <div className="bg-red-400 backdrop-blur-md shadow-md p-4 rounded-full">
          {isPlaying ? (
            <img
              src={iconsImgs.pause}
              className="nav-link-icon"
              alt="pause-button"
            />
          ) : (
            <img
              src={iconsImgs.play}
              className="nav-link-icon"
              alt="play-button"
            />
          )}
        </div>
        {isPlaying ? "Pause" : "Play"}
      </button>
      {isPlaying && (
        <ReactPlayer
          url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          playing={isPlaying}
          volume={volume}
          muted={muted}
          loop={loop}
          onPlay={handlePlay}
          onPause={handlePause}
          onVolumeChange={handleVolumeChange}
          onProgress={handleProgress}
          controls={true}
          width="50%"
          height="50px"
          className="rounded-md shadow-md"
        />
      )}
      <button className="flex items-center gap-2 text-black px-4 py-2 underline-green-500 hover:underline">
        <img
          src={iconsImgs.like}
          className="nav-link-icon"
          alt={"like-button"}
        />
      </button>
    </div>
  );
};

export default Footer;
