import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage.js";
import WorldPage from "./pages/WorldPage.js";

function App() {
  type countryData = {
    date: string,
    newConfiremed: number,
    totalConfiremed: number,
    newRecovered: number,
    totalRecovered: number,
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<String>("japan");
  const [countryData, setCountryData] = useState<countryData>({
    date: "",
    newConfiremed: 0,
    totalConfiremed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(
        `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCountryData({
            date: data[data.length - 1].Date,
            newConfiremed:
              data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
            totalConfiremed: data[data.length - 1].Confirmed,
            newRecovered:
              data[data.length - 1].Recovered - data[data.length - 2].Recovered,
            totalRecovered: data[data.length - 1].Recovered,
          });
          setLoading(false);
        })
        .catch((err) =>
          alert(
            "エラーが発生しました。ページをリロードしてもう一度試してください。",
          ),
        );
    };
    getCountryData();
  }, [country]);

  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries))
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードしてもう一度試してください。",
        ),
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              countryData={countryData}
              loading={loading}
            />
          }
        />
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
