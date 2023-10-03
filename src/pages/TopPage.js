import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";

const TopPage = ({
  countriesJson,
  getCountryData,
  setCountry,
  countryData,
}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          countriesJson={countriesJson}
          getCountryData={getCountryData}
          setCountry={setCountry}
        />
        <Results countryData={countryData} />
      </div>
    </div>
  );
};

export default TopPage;
