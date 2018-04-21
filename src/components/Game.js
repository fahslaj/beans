import React, { Component } from 'react';
import './Game.css';
import PlayerActions from './Player-Actions';
import Hand from './Hand';
import Fields from './Fields';

class Game extends Component {
  constructor(props) {
    super(props);

    const { deck, deckMap } = this.buildDeck();
    this.shuffle(deck);

    this.state = {
      numPlayers: 2,
      players: {
        '0': {
          id: 0,
          hand: [],
          plots: 2,
          fields: [[], []],
          coins: 0
        },
        '1': {
          id: 1,
          hand: [],
          plots: 2,
          fields: [[], []],
          coins: 0
        }
      },
      discardPile: [],
      deck,
      deckMap
    };
    this.deal();
  }

  buildDeck() {
    const deck = [];
    const deckMap = {};
    const cardDescriptions = this.props.cardDescriptions;

    for (let i = 0; i < cardDescriptions.length; i++) {
      for (let j = 0; j < cardDescriptions[i].frequency; j++) {
        const card = cardDescriptions[i];
        const identity = `${card.id}_${j}`;
        deckMap[identity] = card;
        deck.push({
          ...card,
          identity
        });
      }
    }

    return { deck, deckMap };
  }

  shuffle(deck) {
    let j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
    }
  }

  deal() {
    let deck = [...this.state.deck];
    let numCardsToDeal = this.state.numPlayers * 5;
    let hands = new Array(this.state.numPlayers);

    for (let i = 0; i < this.state.numPlayers; i++) {
      hands[i] = [];
    }

    let nextPlayer = 0;

    while (numCardsToDeal > 0) {
      hands[nextPlayer].push(deck.pop());
      numCardsToDeal--;
      nextPlayer = (nextPlayer + 1) % this.state.numPlayers;
    }

    const players = {};

    for (let i = 0; i < this.state.numPlayers; i++) {
      players[i] = { ...this.state.players[i], hand: hands[i] };
    }

    this.state = {
      ...this.state,
      players,
      deck
    };
  }

  uproot(playerId, fieldIndex) {
    const player = { ...this.state.players[playerId] };
    if (fieldIndex >= player.plots) {
      throw new Error(`Error: Out of bounds uproot: ${fieldIndex}`);
    }

    if (player.fields[fieldIndex].length === 0) {
      throw new Error(`Error: Nothing to uproot in field: ${fieldIndex}`);
    }

    const uprooted = player.fields[fieldIndex];
    player.fields = [...player.field];
    player.fields[fieldIndex] = [];

    let payout = 0;
    for (let i = 0; i < uprooted[0].rewards; i++) {
      if (uprooted[0].rewards[i].required < uprooted.length) {
        payout = uprooted[0].rewards[i].payout;
      }
    }

    player.coins += payout;

    const discardPile = [...this.state.discardPile];
    discardPile.push(...uprooted);

    this.setState({
      ...this.state,
      players: {
        ...this.state.players,
        [playerId]: player
      }
    });
  }

  draw(playerId) {
    const deck = [...this.state.deck];
    const card = deck.pop();
    const hand = [...this.state.players[playerId].hand, card];

    this.setState({
      ...this.state,
      deck,
      players: {
        ...this.state.players,
        [playerId]: {
          ...this.state.players[playerId],
          hand
        }
      }
    });
  }

  render() {
    return (
      <div className="Game">
        <PlayerActions draw={() => this.draw(1)} />
        <Hand cards={this.state.players[1].hand} />
        <div className="Center-Row-Container">
          {this.state.deck.length}
          <Fields
            fields={this.state.players[1].fields}
            uproot={index => this.uproot(1, index)}
          />
          {/* <div className="Center-Container">
            <Deck />
            <DiscardPile />
          </div> */}
          <Fields
            fields={this.state.players[0].fields}
            uproot={index => this.uproot(0, index)}
          />
        </div>
        <PlayerActions draw={() => this.draw(0)} />
        <Hand cards={this.state.players[0].hand} />
      </div>
    );
  }
}

export default Game;
