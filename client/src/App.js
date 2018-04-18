import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8080');

    // Listen for messages
    this.socket.addEventListener('message', async event => {
      const audioCtx = new AudioContext()
      const response = await fetch('/hi_everybody.wav')
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

      const source = audioCtx.createBufferSource()
      source.buffer = audioBuffer
      source.connect(audioCtx.destination)
      source.start()
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => { this.socket.send('hello') }}>
          poke!
        </button>
      </div>
    );
  }
}

export default App;
