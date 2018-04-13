import React, { Component } from 'react';
import Hand from './Hand';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.buildDeck(props.cardDescriptions);
    this.shuffleDeck();
    this.draw(0);
  }

  buildDeck(cardDescriptions) {
    const deck = [];
    const deckMap = {};

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

    this.setState({
      ...this.state,
      deck,
      deckMap
    });
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

    this.setState({
      ...this.state,
      deck
    });
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
    const hand = [...this.state.players[playerId].hand];
    const deck = [...this.state.deck];
    hand.push(deck.pop());
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
    return <Hand cards={this.state.deck} />;
  }
}

export default Game;
