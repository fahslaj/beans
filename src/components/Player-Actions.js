import React from 'react';
import { drawCard } from '../store/actions';
import { connect } from 'react-redux';
import './Player-Actions.css';

const PlayerActions = ({ drawCard }) => (
  <div className="Player-Actions">
    <button className="Primary-Button" onClick={() => drawCard()}>
      Draw
    </button>
  </div>
);

const mapDispatchToProps = { drawCard };

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    drawCard: () => dispatchProps.drawCard(ownProps.playerId)
  });
}

export default connect(
  null,
  mapDispatchToProps,
  mergeProps
)(PlayerActions);
