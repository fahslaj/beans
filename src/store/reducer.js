import { SELECT_CARD, DRAW_CARD } from './actions';
import { buildDeck } from '../game/deck';

const { deck, deckMap } = buildDeck();
export const initialState = {
  activePlayer: 0,
  playerCount: 2,
  players: {
    '0': {
      id: 0,
      hand: [],
      plots: 2,
      fields: [[], []],
      coins: 0,
      selectedCardIndex: null
    },
    '1': {
      id: 1,
      hand: [],
      plots: 2,
      fields: [[], []],
      coins: 0,
      selectedCardIndex: null
    }
  },
  discardPile: [],
  deck,
  deckMap
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_CARD: {
      return {
        ...state,
        players: {
          ...state.players,
          [state.activePlayer]: {
            ...state.players[state.activePlayer],
            selectedCardIndex: action.index
          }
        }
      };
    }
    case DRAW_CARD: {
      const playerId = action.playerId;
      const deck = [...state.deck];
      const card = deck.pop();
      return {
        ...state,
        players: {
          ...state.players,
          [playerId]: {
            ...state.players[playerId],
            hand: [...state.players[playerId].hand, card]
          }
        },
        deck
      };
    }
    default: {
      return state;
    }
  }
};
