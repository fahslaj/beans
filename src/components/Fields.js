import React, { Component } from 'react';
import './Fields.css';
import Field from './Field';

class Fields extends Component {
  render() {
    const fields = [];

    for (let i = 0; i < this.props.fields.length; i++) {
      const field = this.props.fields[i];
      fields.push(
        <Field key={i} cards={field} uproot={() => this.props.uproot(i)} />
      );
    }

    return <div className="Fields">{fields}</div>;
  }
}

export default Fields;
