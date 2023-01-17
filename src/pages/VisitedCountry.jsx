import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../Context";
import { motion } from "framer-motion";

const VisitedCountry = () => {
  const { name } = useParams();
  const { data } = useContext(MyContext);
  const navigate = useNavigate();

  const country = data.filter((each) => {
    let countryName = each.name.common.replace(/\s+/g, "");
    return countryName.indexOf(name) === 0;
  });

  const displayLanguages = (item) => {
    let languagesArray = Object.values(item);
    let displayEachLanguage = languagesArray.map((each) => each).join(", ");
    return displayEachLanguage;
  };

  const displayBorders = (item) => {
    let borders = data.filter((each) => {
      return item?.includes(each.cca3);
    });

    let bordersToDisplay = borders.map((item) => {
      let countryName = item.name.common;
      return (
        <Link
          key={item.name.common}
          to={`/country/${countryName.replace(/\s+/g, "")}`}
        >
          <span className="visited__border-each btn">{countryName}</span>
        </Link>
      );
    });

    return bordersToDisplay;
  };

  const goBack = () => navigate(-1, { replace: true });

  return country.map((each) => {
    return (
      <motion.section
        key={each.name.common}
        className="visited container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button onClick={goBack} className="visited__btn btn">
          <span>←</span>Back
        </button>
        <img className="visited__img" src={each.flags.svg} alt="" />
        <div className="visited__details">
          <h2 className="visited__details-title">{each.name.common}</h2>
          <div className="visited__details-container">
            <div className="each">
              <p>
                Native Name:{" "}
                <span>{Object.values(each.name.nativeName)[0].common}</span>
              </p>
              <p>
                Population: <span>{each.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{each.region}</span>
              </p>
              <p>
                Sub Region: <span>{each.subregion}</span>
              </p>
              <p>
                Capital: <span>{each.capital[0]}</span>
              </p>
            </div>
            <div className="each">
              <p>
                Top Level Domain: <span>{each.tld[0]}</span>
              </p>
              <p>
                Currencies:{" "}
                {<span>{Object.values(each.currencies)[0].name}</span>}
              </p>
              <p>
                Languages: <span>{displayLanguages(each.languages)}</span>
              </p>
            </div>
          </div>
          <div className="visited__border">
            <p>Border Countries: </p>
            <div className="visited__border-container">
              {each.borders ? displayBorders(each.borders) : <span>N/A</span>}
            </div>
          </div>
        </div>
      </motion.section>
    );
  });
};

export default VisitedCountry;
