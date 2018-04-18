import React, { Component } from 'react';
import Player from './Player';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: 2,
      players: {
        [0]: {
          id: 0,
          hand: [],
          plots: 2,
          field: [[], []],
          coins: 0
        },
        [1]: {
          id: 1,
          hand: [],
          plots: 2,
          field: [[], []],
          coins: 0
        }
      },
      discardPile: [],
      deck: [],
      deckMap: {}
    };

    this.buildDeck();
    this.shuffleDeck();
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

    this.state = {
      ...this.state,
      deck,
      deckMap
    };
  }

  shuffleDeck() {
    const deck = [...this.state.deck];

    let j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
    }

    this.state = {
      ...this.state,
      deck
    };
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
      throw `Error: Out of bounds uproot: ${fieldIndex}`;
    }

    if (player.field[fieldIndex].length === 0) {
      throw `Error: Nothing to uproot in plot: ${fieldIndex}`;
    }

    const uprooted = player.field[fieldIndex];
    player.field = [...player.field];
    player.field[fieldIndex] = [];

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
    this.setState({
      ...this.state,
      deck
    });
    return card;
  }

  render() {
    return <Player id={0} draw={id => this.draw(id)} />;
  }
}

export default Game;
