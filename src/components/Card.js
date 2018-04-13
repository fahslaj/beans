import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = props.card;
    this.selected = props.selected;

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
          {reward.required},{reward.payout}
        </div>
      );
    }

    return (
      <button className="Card" onClick={() => this.selected()}>
        <div
          className="Card-title"
          style={{ color: this.primary, backgroundColor: this.secondary }}
        >
          {this.card.title}
        </div>
        <div className="Card-body" style={{ backgroundColor: this.primary }}>
          <div className="Card-frequency" style={{ color: this.secondary }}>
            ({this.card.frequency})
          </div>
        </div>
        <div className="Card-footer" style={{ backgroundColor: this.tertiary }}>
          <div className="Card-rewards">{rewards}</div>
        </div>
      </button>
    );
  }
}

export default Card;
