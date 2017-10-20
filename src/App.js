import React, { Component } from 'react';
import './App.css';
import Tab from "./Tab";
import Wizar from "./Wizar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizar /> 
        <Tab/>
      </div>
    );
  }
}

export default App;
