import React, { Component } from 'react';
import './Deck.css';

class Deck extends Component {
  render() {
    return (
      <div className="Deck-Container">
        <div className="Deck-Card-Container">
          <div className="Deck-Card">
            <div className="Deck-Card-Text">{this.props.cards.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
