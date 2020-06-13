import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import "./App.css";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  console.log(countries[0]);

  return (
    <div className={"container"}>
      <div>
        <Search />
      </div>
      <div>
        <ul className={"country-list"}>
          {countries.map((country) => (
            <li key={country.alpha2Code}>{country.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
