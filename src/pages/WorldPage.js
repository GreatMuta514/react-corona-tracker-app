import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Card from "../components/Card.js";

const WorldPage = (props) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;
