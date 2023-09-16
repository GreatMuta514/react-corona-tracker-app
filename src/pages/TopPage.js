import Title from '../components/Title.js';
import Selector from '../components/Selector.js';
import Results from '../components/Results.js';

const TopPage = (props) => {
    return (
      <div className="TopPage">
        <Title />
        <Selector countriesJson = { props.countriesJson }
                  getCountryData = { props.getCountryData }
                  setCountry = { props.setCountry } />
        <Results  countryData = { props.countryData } />
      </div>
    );
  }

  export default TopPage;