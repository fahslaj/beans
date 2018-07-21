// const { deck, deckMap } = this.buildDeck();

// const gameState = {
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

// const shuffle = deck => {
//   const deckCopy = deck.slice();
//   let j, x, i;
//   for (i = deck.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     deckCopy[i] = deck[j];
//     deckCopy[j] = deck[i];
//   }
//   return deckCopy;
// };

// const deal = state => {
//   let deck = [...state.deck];
//   let numCardsToDeal = state.numPlayers * 5;
//   let hands = new Array(state.numPlayers);

//   for (let i = 0; i < state.numPlayers; i++) {
//     hands[i] = [];
//   }

//   let nextPlayer = 0;

//   while (numCardsToDeal > 0) {
//     hands[nextPlayer].push(deck.pop());
//     numCardsToDeal--;
//     nextPlayer = (nextPlayer + 1) % state.numPlayers;
//   }

//   const players = {};

//   for (let i = 0; i < state.numPlayers; i++) {
//     players[i] = { ...state.players[i], hand: hands[i] };
//   }

//   return {
//     ...state,
//     players,
//     deck
//   };
// };

// uproot(playerId, fieldIndex) {
//   const player = { ...this.state.players[playerId] };
//   if (fieldIndex >= player.plots) {
//     throw new Error(`Error: Out of bounds uproot: ${fieldIndex}`);
//   }

//   if (player.fields[fieldIndex].length === 0) {
//     throw new Error(`Error: Nothing to uproot in field: ${fieldIndex}`);
//   }

//   const uprooted = player.fields[fieldIndex];
//   player.fields = [...player.field];
//   player.fields[fieldIndex] = [];

//   let payout = 0;
//   for (let i = 0; i < uprooted[0].rewards; i++) {
//     if (uprooted[0].rewards[i].required < uprooted.length) {
//       payout = uprooted[0].rewards[i].payout;
//     }
//   }

//   player.coins += payout;

//   const discardPile = [...this.state.discardPile];
//   discardPile.push(...uprooted);

//   this.setState({
//     ...this.state,
//     players: {
//       ...this.state.players,
//       [playerId]: player
//     }
//   });
// }

// draw(playerId) {
//   const deck = [...this.state.deck];
//   const card = deck.pop();
//   const hand = [...this.state.players[playerId].hand, card];

//   this.setState({
//     ...this.state,
//     deck,
//     players: {
//       ...this.state.players,
//       [playerId]: {
//         ...this.state.players[playerId],
//         hand
//       }
//     }
//   });
// }

// play(playerId, handIndex, fieldIndex) {
//   const hand = [...this.state.players[playerId].hand];

//   if (hand.length <= handIndex) {
//     throw new Error(
//       `Error: Can't play card outside of hand: ${hand.length} ${handIndex}`
//     );
//   }

//   const card = hand[handIndex];
//   hand.splice(handIndex, 1);

//   const field = [...this.state.players[playerId].fields[fieldIndex]];
//   if (field.length > 0 && field[0].id !== card.id) {
//     throw new Error(
//       `Error: Can't play a card into a field with a different type of bean: ${
//         field[0].title
//       } ${card.title}`
//     );
//   }

//   field.push(card);

//   const fields = [...this.state.players[playerId].fields];
//   fields[fieldIndex] = field;

//   this.setState({
//     ...this.state,
//     players: {
//       ...this.state.players,
//       [playerId]: {
//         ...this.state.players[playerId],
//         hand,
//         fields
//       }
//     }
//   });
// }

// buildDeck() {
//   const deck = [];
//   const deckMap = {};
//   const cardDescriptions = this.props.cardDescriptions;

//   for (let i = 0; i < cardDescriptions.length; i++) {
//     for (let j = 0; j < cardDescriptions[i].frequency; j++) {
//       const card = cardDescriptions[i];
//       const identity = `${card.id}_${j}`;
//       deckMap[identity] = card;
//       deck.push({
//         ...card,
//         identity
//       });
//     }
//   }

//   return { deck, deckMap };
// }
