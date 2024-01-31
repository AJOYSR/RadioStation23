// components/ListItems/RadioStation.jsx

import React, { useState } from "react";
import { iconsImgs } from "../../utils/images";
import ReactPlayer from "react-player";
import { songsdata } from "../../assets/audios/audios";

const RadioStation = ({ station }) => {
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

  const toggleLoop = () => {
    setLoop((prevLoop) => !prevLoop);
  };

  return (
    <div className="radio-cart p-4 border rounded-md shadow-md flex flex-col gap-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
      {/* Title, Country, and Image Row */}
      <div className="flex items-center gap-4">
        <div>
          <h3
            className=" preserve-whitespace font-semibold text-xl"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {station.name + " ".repeat(Math.max(0, 30 - station.name.length))}
          </h3>
          <p className="text-gray-500">{station.country}</p>
        </div>
        <div>
          <img
            src={station.favicon}
            alt={`${station.name} Logo`}
            className="w-16 h-20"
          />
        </div>
      </div>

      {/* Language and Class Row */}
      <div className="flex items-center gap-4">
        <p className="text-md text-black font-bold bg-slate-200 rounded-2xl p-1 px-2">
          {station.language}
        </p>

        <p className="text-md text-black font-bold bg-slate-200 rounded-2xl p-1 px-2">
          classical
        </p>
      </div>

      {/* Votes Row */}
      <div>
        <p className="text-sm text-white bg-blue-700 w-28 font-bold rounded-2xl p-1 px-2">
          Votes: {station.votes.toLocaleString()}
        </p>
      </div>

      {/* Like and Play Row */}
      <div className="flex items-end gap-4">
        <button
          className="flex items-center gap-2 text-black px-4 py-2 underline-green-500 hover:underline"
          onClick={() => addToFavorites(station)}
        >
          <img
            src={iconsImgs.like}
            className="nav-link-icon"
            alt={"like-button"}
          />
          Like
        </button>

        <button
          className="flex items-center gap-2 text-black px-4 py-2 underline-green-500 hover:underline"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img
            src={iconsImgs.play}
            className="nav-link-icon"
            alt={"play-button"}
          />
          Play
        </button>
      </div>

      {/* Streaming Player */}

      {isPlaying && (
        <div className="mt-4 p-2">
          <ReactPlayer
            url="/src/assets/audios/gameofthrones.mp3"
            playing={isPlaying}
            volume={volume}
            muted={muted}
            loop={loop}
            onPlay={handlePlay}
            onPause={handlePause}
            onVolumeChange={handleVolumeChange}
            onProgress={handleProgress}
            controls={true}
            width="100%"
            height="50px"
            className="rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default RadioStation;
