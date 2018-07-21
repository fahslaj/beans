import React, { Component } from 'react';
import Deck from './Deck';
import Fields from './Fields';
import './Game.css';
import Hand from './Hand';
import PlayerActions from './Player-Actions';
// TODO: PropTypes?
class Game extends Component {
  constructor(props) {
    super(props);

    // const { deck, deckMap } = this.buildDeck();
    // this.shuffle(deck);

    // this.state = {
    //   numPlayers: 2,
    //   players: {
    //     '0': {
    //       id: 0,
    //       hand: [],
    //       plots: 2,
    //       fields: [[], []],
    //       coins: 0
    //     },
    //     '1': {
    //       id: 1,
    //       hand: [],
    //       plots: 2,
    //       fields: [[], []],
    //       coins: 0
    //     }
    //   },
    //   discardPile: [],
    //   deck,
    //   deckMap
    // };
    // this.deal();
  }

  render() {
    return (
      <div className="Game">
        <PlayerActions draw={() => this.draw(1)} />
        <Hand
          cards={this.state.players[1].hand}
          selected={index => this.play(1, index, 0)}
        />
        <div className="Center-Row-Container">
          <Fields
            fields={this.state.players[1].fields}
            uproot={index => this.uproot(1, index, 0)}
          />
          <div className="Center-Container">
            <Deck cards={this.state.deck} />
            {/* <DiscardPile /> */}
          </div>
          <Fields
            fields={this.state.players[0].fields}
            uproot={index => this.uproot(0, index, 0)}
          />
        </div>
        <PlayerActions draw={() => this.draw(0)} />
        <Hand
          cards={this.state.players[0].hand}
          selected={index => this.play(0, index, 0)}
        />
      </div>
    );
  }
}

export default Game;
