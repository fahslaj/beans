import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cardDescriptions from './assets/card-descriptions';
import Hand from './components/Hand';

const deckMap = {};
const deck = [];

for (let i = 0; i < cardDescriptions.length; i++) {
  for (let j = 0; j < cardDescriptions[i].frequency; j++) {
    const card = cardDescriptions[i];
    const identity = `${card.id}_${j}`;
    deckMap[identity] = card;
    deck.push({
      ...card,
      identity
    });
  }
}

class App extends Component {
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
        <Hand cards={deck} selected={e => console.log(e)} />
      </div>
    );
  }
}

export default App;
