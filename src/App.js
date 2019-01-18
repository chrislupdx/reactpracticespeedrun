import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {
  state = {
    usernames : [
      { username: 'never'},
      { username: 'neinnn'},
    ]
  }

  eventHandler = () => {
    // console.log('here')
    this.setState({
      usernames : [
        { username: 'GERALDO'},
        { username: 'MAXINE'},
      ]
    })
  };


  render() {
    return (
      <div className="App">
        <Useroutput username={this.state.usernames[0].username} />
        <Useroutput username={this.state.usernames[1].username} > REDACTED </Useroutput>
        <Userinput
        click={this.eventHandler}
        />
        <button onClick={this.eventHandler}>not in userinput</button>
      </div>
    );
  }
}

export default App;
