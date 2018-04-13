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
        <Hand cards={cardDescriptions} />
      </div>
    );
  }
}

class Hand extends Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
  }

  render() {
    const cards = [];
    for (let i = 0; i < this.cards.length; i++) {
      cards.push(
        <div className="container" key={this.cards[i].id}>
          <Card card={this.cards[i]} />
        </div>
      );
    }

    return <div className="Hand">{cards}</div>;
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;

    const colors = this.card.colors;
    this.primary = `rgb(${colors.primary[0]}, ${colors.primary[1]}, ${
      colors.primary[2]
    })`;
    this.secondary = `rgb(${colors.secondary[0]}, ${colors.secondary[1]}, ${
      colors.secondary[2]
    })`;
    this.tertiary = `rgb(${colors.tertiary[0]}, ${colors.tertiary[1]}, ${
      colors.tertiary[2]
    })`;
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
        <div
          className="Card-title"
          style={{ color: this.secondary, backgroundColor: this.primary }}
        >
          {this.card.title}
        </div>
        <div className="Card-body" style={{ backgroundColor: this.secondary }}>
          <div className="Card-frequency" style={{ color: this.primary }}>
            ({this.card.frequency})
          </div>
        </div>
        <div className="Card-footer" style={{ backgroundColor: this.tertiary }}>
          <div className="Card-rewards">{rewards}</div>
        </div>
      </div>
    );
  }
}

export default App;
