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
          style={{ top: `${-100 * i}px`, 'z-index': i }}
        >
          <Card
            card={card}
            key={card.identity}
            selected={() => this.props.uproot()}
          />
        </div>
      );
    }

    return <div className="Field">{cards}</div>;
  }
}

export default Field;
