import React, { Component } from 'react';
import './Fields.css';
import Card from './Card';

class Fields extends Component {
  render() {
    const fields = [];
    for (let i = 0; i < this.props.fields.length; i++) {
      const cards = [];
      for (let j = 0; j < this.props.fields[i].length; j++) {
        cards.push(
          <Card
            card={this.props.fields[i][j]}
            key={this.props.fields[i][j].identity}
            selected={() => this.props.uproot(i)}
          />
        );
      }
      fields.push(<div key={i}>{cards}</div>);
    }

    return <div className="Fields">{fields}</div>;
  }
}

export default Fields;
