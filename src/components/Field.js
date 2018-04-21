import React, { Component } from 'react';
import './Field.css';
import Card from './Card';

class Field extends Component {
  render() {
    const cards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      const card = this.props.cards[i];
      cards.push(
        <div
          className="Field-Card-Container"
          key={card.identity}
          style={{ top: `${-100 * i}px`, zIndex: i }}
        >
          <Card card={card} selected={() => this.props.uproot()} />
        </div>
      );
    }

    return <div className="Field">{cards}</div>;
  }
}

export default Field;
