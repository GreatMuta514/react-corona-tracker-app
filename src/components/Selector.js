import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>select a country</option>
        {props.countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={props.getCountryData}>GetData</button>
    </div>
  );
};

export default Selector;
