import cardDescriptions from '../assets/card-descriptions';

export const Game = function() {
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

  return { deck: () => deck };
};

export default Game;
