import Header from '../components/Header.js';
import Title from '../components/Title.js';
import Card from '../components/Card.js';

const WorldPage = (props) => {
    return (
      <div>
        <Header />
        <Title />
        <Card allCountriesData={props.allCountriesData} />
      </div>
    );
  }

export default WorldPage;