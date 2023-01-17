import React, { useEffect, useState } from "react";

const MyContext = React.createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderCountries = () => {
    let countryToRender;

    if (search !== "") {
      countryToRender = data.filter((each) => {
        let countryName = each.name.common.toLowerCase();
        let countrySearched = search.toLowerCase();
        return countryName.indexOf(countrySearched) !== -1;
      });
    } else if (region !== "All") {
      countryToRender = data.filter((each) => {
        return each.region.includes(region);
      });
    } else {
      countryToRender = data.map((item) => item);
    }

    return countryToRender;
  };

  return (
    <MyContext.Provider
      value={{
        data,
        handleChange,
        search,
        isLoading,
        setRegion,
        region,
        renderCountries,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, Context };
