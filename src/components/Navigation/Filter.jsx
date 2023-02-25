import React, { useContext, useState, useRef, useEffect } from "react";
import { MyContext } from "../../Context";

const Filter = () => {
  const { setRegion, region } = useContext(MyContext);
  const [isActive, setIsActive] = useState(false);
  const regionSelection = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const dropdownRef = useRef(null);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  function handleRegion(region) {
    setRegion(region);
    setIsActive(false);
  }

  function handleOutsideClick(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="filter__wrapper">
      <div onClick={handleClick} className="filter btn">
        <p className="filter__select">
          {region !== "All" ? region : "Filter by Region"}
          <i className="arrow down"></i>
        </p>
      </div>
      <div className={`filter__opt ${isActive ? "active" : ""}`}>
        {regionSelection.map((each) => (
          <button onClick={() => handleRegion(each)} className="btn" key={each}>
            {each}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
