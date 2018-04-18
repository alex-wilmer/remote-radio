import React from 'react'

class App extends React.Component {
  componentDidMount() {
    // Create WebSocket connection.
    this.socket = new WebSocket(`ws://${process.env.REACT_APP_SERVER_HOST}`);

    // Connection opened
    this.socket.addEventListener('open', function (event) {
        this.socket.send('Hello Server!');
    });

    // Listen for messages
    this.socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
  }
  render() {
    return <h1>
      <button onClick={() => {
        this.socket.send('hey i clicked a button')
      }}>
      click me
    </button>

      Hello App class</h1>
  }
}

export default App



















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   componentDidMount() {
//     this.socket = new WebSocket(process.env.REACT_APP_WS ||   `ws://localhost:8080`);
//
//     // Listen for messages
//     this.socket.addEventListener('message', async event => {
//       const audioCtx = new AudioContext()
//       const response = await fetch('/hi_everybody.wav')
//       const arrayBuffer = await response.arrayBuffer()
//       const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
//
//       const source = audioCtx.createBufferSource()
//       source.buffer = audioBuffer
//       source.connect(audioCtx.destination)
//       source.start()
//     });
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <button onClick={() => { this.socket.send('hello!') }}>
//           poke!
//         </button>
//       </div>
//     );
//   }
// }
//
// export default App;
