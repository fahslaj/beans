import React from 'react';
import './Fields.css';
import Field from './Field';
import { connect } from 'react-redux';
import { uproot } from '../store/actions';

const Fields = ({ uproot, fields }) => {
  const fieldDivs = [];

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    fieldDivs.push(<Field key={i} cards={field} selected={() => uproot(i)} />);
  }

  return <div className="Fields">{fieldDivs}</div>;
};

function mapStateToProps(state, ownProps) {
  return {
    fields: state.players[ownProps.playerId].fields
  };
}

const mapDispatchToProps = { uproot };

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, {
    uproot: index => dispatchProps.uproot(ownProps.playerId, index)
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Fields);
