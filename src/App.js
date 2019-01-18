import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {
  state = {
      username: 'georgie',
  }


  alternateHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <Useroutput username={this.state.username}
        />
        <Useroutput username={this.state.username} > REDACTED </Useroutput>
        <Userinput
        changed={this.alternateHandler}
        currentName={this.state.username}
        />
      </div>
    );
  }
}

export default App;
