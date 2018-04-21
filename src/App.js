import React, { Component } from 'react';
import Game from './components/Game';
import cardDescriptions from './assets/card-descriptions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game cardDescriptions={cardDescriptions} numPlayers={4} />
      </div>
    );
  }
}

export default App;
