import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Card from "../components/Card.js";

const WorldPage = ({allCountriesData}) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
