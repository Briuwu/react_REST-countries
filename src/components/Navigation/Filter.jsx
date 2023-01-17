import React, { useContext, useState } from "react";
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

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleRegion = (region) => {
    setRegion(region);
    setIsActive(false);
  };

  return (
    <div className="filter__wrapper">
      <button onClick={handleClick} className="filter btn">
        <p className="filter__select">
          {region !== "All" ? region : "Filter by Region"}
          <i className="arrow down"></i>
        </p>
      </button>
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
