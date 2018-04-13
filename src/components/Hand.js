import React, { Component } from 'react';
import Card from './Card';

class Hand extends Component {
  render() {
    const cards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      cards.push(
        <Card
          card={this.props.cards[i]}
          key={this.props.cards[i].identity}
          selected={e => this.props.selected(i)}
        />
      );
    }

    return <div className="Hand">{cards}</div>;
  }
}

export default Hand;
