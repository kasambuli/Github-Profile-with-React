import './App.scss';
import CardList from './Components/CardList';
import Form from './Components/Form';
import { TEST_DATA as testData } from './utils/Testdata';
import { useState } from 'react';
import PropTypes from "prop-types";

const App = ({ title }) => {
  // constructor(props) {
  //   super(props)//honour the link between the App Component and the Component it extends from (React.Component)
  //   this.state = {
  //     profiles: testData,
  //   }//state object has to be an object in class based Components, not string, not integer
  //   //state is an object of the instance and profiles is a property on that object
  // }


  // addNewProfile = (profileData) => {
  //   this.setState(prevState => ({
  //     profiles: [...prevState.profiles, profileData]
  //   }))
  // }
  const [profiles, setProfiles] = useState({ testData })
  console.log(profiles)
  return (
    <div className="App">
      <div className="header">{title}</div>
      <Form onSubmit={() => setProfiles(profiles)} />
      <CardList profiles={profiles} />
    </div>
  );
}
App.propTypes = {
  title: PropTypes.string.isRequired,
};
export default App;
