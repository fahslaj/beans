import React, { Component } from 'react';
import './Fields.css';
import Card from './Card';

class Fields extends Component {
  render() {
    console.log(this.props);
    const fields = [];

    for (let i = 0; i < this.props.fields.length; i++) {
      const field = this.props.fields[i];
      const cards = [];

      for (let j = 0; j < field.length; j++) {
        const card = field[j];

        console.log('pushing card', card);
        cards.push(
          <Card
            card={card}
            key={card.identity}
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
