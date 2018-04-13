import React, { Component } from 'react';
import Hand from './Hand';

class Player extends Component {
  render() {
    return (
      <div>
        <Hand cards={[]} />
      </div>
    );
  }
}

export default Player;
