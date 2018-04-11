import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cardDescriptions from './assets/card-descriptions';

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
        <Hand />
      </div>
    );
  }
}

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <div className="container">
          <Card card={cardDescriptions[0]} />
        </div>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;
  }

  render() {
    const rewards = [];
    for (let i = 0; i < this.card.rewards.length; i++) {
      const reward = this.card.rewards[i];
      rewards.push(
        <div className="Card-reward" key={reward.required}>
          {reward.required}->{reward.payout}
        </div>
      );
    }

    return (
      <div className="Card">
        <div className="Card-title">{this.card.title}</div>
        <div className="Card-body">
          <div className="Card-frequency">({this.card.frequency})</div>
        </div>
        <div className="Card-footer">
          <div className="Card-rewards">{rewards}</div>
        </div>
      </div>
    );
  }
}

export default App;
