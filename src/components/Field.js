import React, { Component } from 'react';
import './Field.css';
import Card from './Card';

const Field = ({ cards, selected }) => {
  const cardDivs = [];
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardDivs.push(
      <div
        className="Field-Card-Container"
        key={card.identity}
        style={{ top: `${-100 * i}px`, zIndex: i }}
      >
        <Card card={card} selected={selected} />
      </div>
    );
  }

  return <div className="Field">{cards}</div>;
};

export default Field;
