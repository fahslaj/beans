import React, { Component } from 'react';
import Card from './Card';

class Hand extends Component {
  constructor(props) {
    super(props);
    this.cards = props.cards;
    this.selected = props.selected;
  }

  render() {
    const cards = [];
    for (let i = 0; i < this.cards.length; i++) {
      cards.push(
        <Card
          card={this.cards[i]}
          key={this.cards[i].identity}
          selected={e => this.selected(i)}
        />
      );
    }

    return <div className="Hand">{cards}</div>;
  }
}

export default Hand;
