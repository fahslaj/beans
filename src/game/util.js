export const shuffle = cards => {
  const cardsCopy = cards.slice();
  let j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    cardsCopy[i] = cards[j];
    cardsCopy[j] = cards[i];
  }
  return cardsCopy;
};
