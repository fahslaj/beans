import React from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../store/actions';
import Card from './Card';
import './Hand.css';

const Hand = ({ selectCard, cards }) => {
  const cardDivs = [];
  for (let i = 0; i < cards.length; i++) {
    cardDivs.push(
      <Card
        card={cards[i]}
        key={cards[i].identity}
        selected={() => selectCard(i)}
      />
    );
  }

  return <div className="Hand">{cardDivs}</div>;
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.players[ownProps.playerId].hand
  };
}

const mapDispatchToProps = { selectCard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hand);
