import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = ({countriesJson, getCountryData, setCountry}) => {
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>select a country</option>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCountryData}>GetData</button>
    </div>
  );
};

export default Selector;
