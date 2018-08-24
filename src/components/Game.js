import React from 'react';
import Deck from './Deck';
import Fields from './Fields';
import './Game.css';
import Hand from './Hand';
import PlayerActions from './Player-Actions';
import { connect } from 'react-redux';

// TODO: PropTypes?
// class Game extends Component {
//   render() {
//     return (
//       <div className="Game">
//         <PlayerActions draw={() => this.props.drawCard(1)} />
//         <Hand playerId={1} />
//       </div>
//     );
//     // const state = this.props.store.getState();
//     // return (
//     //   <div className="Game">
//     //     <PlayerActions draw={() => this.props.store.dispatch(drawCard())} />
//     //     <Hand
//     //       cards={state.players[1].hand}
//     //       selected={index => this.play(1, index, 0)}
//     //     />
//     //     <div className="Center-Row-Container">
//     //       <Fields
//     //         fields={[]}
//     //         // fields={this.state.players[1].fields}
//     //         uproot={index => this.uproot(1, index, 0)}
//     //       />
//     //       <div className="Center-Container">
//     //         <Deck
//     //           cards={[]}
//     //           // cards={this.state.deck}
//     //         />
//     //         {/* <DiscardPile /> */}
//     //       </div>
//     //       <Fields
//     //         fields={[]}
//     //         // fields={this.state.players[0].fields}
//     //         uproot={index => this.uproot(0, index, 0)}
//     //       />
//     //     </div>
//     //     <PlayerActions draw={() => this.draw(0)} />
//     //     <Hand
//     //       cards={state.players[0].hand}
//     //       selected={index => this.play(0, index, 0)}
//     //     />
//     //   </div>
//     // );
//   }
// }

const Game = () => (
  <div className="Game">
    <PlayerActions playerId={1} />
    <Hand playerId={1} />
  </div>
);

export default Game;
