import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";

const TopPage = ({ countriesJson, setCountry, countryData, loading }) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector countriesJson={countriesJson} setCountry={setCountry} />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;
