import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import Country from "./Country";
import { MyContext } from "../../Context";
import LazyLoad from "react-lazy-load";

const Countries = () => {
  const { isLoading, renderCountries } = useContext(MyContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <AnimatePresence>
      <div className="countries">
        {renderCountries().map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Countries;
