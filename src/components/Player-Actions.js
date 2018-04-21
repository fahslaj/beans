import React, { Component } from 'react';
import './Player-Actions.css';

class PlayerActions extends Component {
  render() {
    return (
      <div className="Player-Actions">
        <button className="Primary-Button" onClick={() => this.props.draw()}>
          Draw
        </button>
      </div>
    );
  }
}

export default PlayerActions;
