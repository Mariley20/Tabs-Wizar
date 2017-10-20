import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from "./tab";
import FirstStep from "./First";
import AditionalInfo from "./AditionalInfo";
import LastStep from "./last";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstStep />
        <AditionalInfo />
        <LastStep />
        <Tab/>
      </div>
    );
  }
}

export default App;
