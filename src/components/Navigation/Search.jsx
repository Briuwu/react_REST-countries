import React, { useContext } from "react";
import { MyContext } from "../../Context";
import searchIcon from "./magnifying-glass-solid.svg";

const Search = () => {
  const { search, handleChange } = useContext(MyContext);

  return (
    <div className="search">
      <button className="search__icon btn">
        <img src={searchIcon} alt="" />
      </button>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Search for a country..."
        type="text"
      />
    </div>
  );
};

export default Search;
