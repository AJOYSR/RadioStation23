/**
 * The DarkMode component sets the data-theme attribute of the body element to "dark" and renders an
 * empty div.
 * @returns The DarkMode component is returning an empty div.
 */
import React from "react";
import { iconsImgs } from "../../utils/images";

import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  setDarkMode();
  return (
    <div></div>
  );
};

export default DarkMode;
