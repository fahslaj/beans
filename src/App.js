import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hand from './components/Hand';
import Game from './services/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.deck = Game().deck();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hand cards={this.deck} selected={e => console.log(e)} />
      </div>
    );
  }
}

export default App;
