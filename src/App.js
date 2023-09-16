import './App.css';
import { useState } from "react";
import countriesJson from "./countries.json";
import TopPage from './pages/TopPage.js';

function App() {

  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(
    {
      date: "",
      newConfiremed: "",
      totalConfiremed: "",
      newRecovered: "",
      totalRecovered: "",
    }
  );

  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => { setCountryData({
        date: data[data.length -1].Date,
        newConfiremed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
        totalConfiremed: data[data.length - 1].Confirmed,
        newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
        totalRecovered: data[data.length - 1].Recovered,
      });
    })
  }
  
  return (
    <div className="App">
      { console.log(countryData) }
      <TopPage countriesJson = { countriesJson }
               setCountry = { setCountry }
               getCountryData = { getCountryData }
               countryData = { countryData } />
    </div>
  );
}
  
export default App;
