import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hand from './components/Hand';
import Game from './services/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.game = Game();
    this.hand = this.game.hand(0);
    this.game.register(() => (this.hand = this.game.hand(0)));
    this.game.draw(0);
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
        <Hand cards={this.hand} selected={e => this.game.draw(0)} />
      </div>
    );
  }
}

export default App;
