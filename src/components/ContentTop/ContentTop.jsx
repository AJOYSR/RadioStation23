import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { SidebarContext } from "../../context/sidebarContext";

import { useTheme } from '../contextTheme/ThemeContext';

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      toggleTheme(); 
    }
    setInitialRender(false);
  }, []); 

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={`main-content-top ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler hover:shadow-md"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="Menu" />
        </button>
        <h3
          className="content-top-title cursor-pointer hover:underline"
          onClick={navigateToHome}
        >
          RadioStation23
        </h3>
      </div>
      <div className="content-top-btns">
        <button
          type="button"
          className="dark-mode-toggle content-top-btn"
          onClick={() => {
            toggleTheme();
            
            localStorage.setItem("theme", isDarkMode ? "light" : "dark");
          }}
        >
          {isDarkMode ? (
            <img src={iconsImgs.Sun} alt="Light Mode" />
          ) : (
            <img src={iconsImgs.Moon} alt="Dark Mode" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
