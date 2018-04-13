import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game';
import cardDescriptions from './assets/card-descriptions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game cardDescriptions={cardDescriptions} />
      </div>
    );
  }
}

export default App;
