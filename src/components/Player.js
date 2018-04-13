import React, { Component } from 'react';
import Hand from './Hand';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
        <button onClick={() => this.draw()}>Draw</button>
        <Hand cards={this.state.hand} />
      </div>
    );
  }
}

export default Player;
