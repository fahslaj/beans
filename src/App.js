import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hand />
      </div>
    );
  }
}

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card-title pt-2 pb-2">Cocoa Bean</div>
        <div className="Card-body">
          <div className="Card-frequency">(4)</div>
        </div>
        <div className="Card-footer pt-2 pb-2">
          <div className="Card-rewards">
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
