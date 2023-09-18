import Header from '../components/Header.js';
import Title from '../components/Title.js';
import Selector from '../components/Selector.js';
import Results from '../components/Results.js';

const TopPage = (props) => {
    return (
      <div className="top-page-container">
        <div>
          <Header />
          <Title />
          <Selector countriesJson = { props.countriesJson }
                    getCountryData = { props.getCountryData }
                    setCountry = { props.setCountry } />
          <Results  countryData = { props.countryData } />
        </div>
      </div>
    );
  }

  export default TopPage;