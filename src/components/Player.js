import React, { Component } from 'react';
import './Player.css';
import Hand from './Hand';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
      plots: 2,
      field: [[], []],
      coins: 0
    };
  }

  draw() {
    const card = this.props.draw();
    const hand = [...this.state.hand, card];

    this.setState({
      ...this.state,
      hand
    });
  }

  render() {
    return (
      <div>
        <div className="Player-Actions">
          <button className="Primary-Button" onClick={() => this.draw()}>
            Draw
          </button>
        </div>
        <Hand cards={this.state.hand} />
      </div>
    );
  }
}

export default Player;
