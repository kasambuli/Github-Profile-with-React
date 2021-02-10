import './App.scss';
import React, { Component } from "react";
import CardList from './Components/CardList';
import Form from './Components/Form';
import testData from './utils/Testdata';

class App extends Component {
  // constructor(props) {
  //   super(props)//honour the link between the App Comonenent and the Component it extends from (React.Component)
  //   this.state = {
  //     profiles: testData,
  //   }//state object has to be an object in class based Components, not string, not integer
  //   //state is an object of the instance and profiles is a property on that object
  // }
  state = {
    profiles: testData,
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render() {
    return (
      <div className="App">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
