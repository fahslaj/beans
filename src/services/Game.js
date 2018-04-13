import cardDescriptions from '../assets/card-descriptions';

export const Game = function() {
  const players = {
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
  };
  const discardPile = [];
  const deck = [];
  const deckMap = {};

  const buildDeck = () => {
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
  };

  const shuffleDeck = () => {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
    }
  };

  const uproot = (playerId, fieldIndex) => {
    const player = players[playerId];
    if (fieldIndex >= player.plots) {
      throw `Error: Out of bounds uproot: ${fieldIndex}`;
    }

    if (player.field[fieldIndex].length === 0) {
      throw `Error: Nothing to uproot in plot: ${fieldIndex}`;
    }

    const uprooted = player.field[fieldIndex];
    player.field[fieldIndex] = [];

    let payout = 0;
    for (let i = 0; i < uprooted[0].rewards; i++) {
      if (uprooted[0].rewards[i].required < uprooted.length) {
        payout = uprooted[0].rewards[i].payout;
      }
    }

    player.coins += payout;
    notify();
  };

  const draw = playerId => {
    players[playerId].hand.push(deck.pop());
    notify();
  };

  const hand = playerId => players[playerId].hand;

  buildDeck();
  shuffleDeck();

  const observers = [];
  const notify = () => {
    for (let i = 0; i < observers.length; i++) {
      observers[i]();
    }
  };

  const register = observer => observers.push(observer);

  return { deck, hand, draw, uproot, register };
};

export default Game;
