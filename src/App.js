import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Useroutput username="anne" />
        <Useroutput username="todd" > REDACTED </Useroutput>
        <Userinput />
      </div>
    );
  }
}

export default App;
