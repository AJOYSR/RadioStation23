/**
 * The above code is a React component that renders an audio player using the ReactPlayer library.
 * @returns The component is returning a div that contains a ReactPlayer component.
 */

import React, { createContext, useContext, useState } from 'react';

const PlayingContext = createContext();

const PlayingProvider = ({ children }) => {
  const [playingStation, setPlayingStation] = useState(null);

  return (
    <PlayingContext.Provider value={{ playingStation, setPlayingStation }} >
      {children}
    </PlayingContext.Provider>
  );
};

const usePlayingContext = () => useContext(PlayingContext);

export { PlayingProvider, usePlayingContext };
