import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Country = ({ country }) => {
  let countryName = country.name.common.replace(/\s+/g, "");

  return (
    <motion.div
      className="country"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to={`/country/${countryName}`}>
        <img className="country__flag" src={country.flags.svg} alt="" />
        <div className="country__info">
          <h2 className="country__name">{country.name.common}</h2>
          <p className="country__details">
            <span>Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p className="country__details">
            <span>Region: </span>
            {country.region}
          </p>
          <p className="country__details">
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Country;
