import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8080');

    // Listen for messages
    this.socket.addEventListener('message', event => {
      console.log('Message from server ', event.data);
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {
          this.socket.send('poke!')
        }}>
          poke!
        </button>
      </div>
    );
  }
}

export default App;
