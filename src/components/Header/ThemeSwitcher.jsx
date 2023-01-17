import React, { useState } from "react";
import MoonImg from "./images/moon-regular.svg";
import SunImg from "./images/sun-regular.svg";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeHandler = () => {
    const theme = !isDarkMode;
    setIsDarkMode((prev) => !prev);

    if (theme) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  };

  return (
    <div className="theme btn" onClick={themeHandler}>
      <div className="theme__icon">
        <img src={isDarkMode ? SunImg : MoonImg} alt="" />
      </div>
      <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
    </div>
  );
};

export default ThemeSwitcher;
