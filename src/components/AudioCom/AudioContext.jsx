export { AudioContext, AudioProvider };

import React, { createContext, useState } from "react";

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState(0); // Add setDuration state

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        muted,
        setMuted,
        loop,
        setLoop,
        duration, // Expose duration state
        setDuration, // Expose setDuration function
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default { AudioContext, AudioProvider };
