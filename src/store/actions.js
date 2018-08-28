export const SELECT_CARD = 'Select Card';
export const DRAW_CARD = 'Draw Card';
export const UPROOT = 'Uproot';

export const selectCard = index => ({ type: SELECT_CARD, index });
export const drawCard = playerId => ({ type: DRAW_CARD, playerId });
export const uproot = (playerId, fieldIndex) => ({
  type: UPROOT,
  playerId,
  fieldIndex
});
