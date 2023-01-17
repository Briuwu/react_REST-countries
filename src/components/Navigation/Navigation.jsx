import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Navigation = () => {
  return (
    <div className="navigation">
      <Search />
      <Filter />
    </div>
  );
};

export default Navigation;
