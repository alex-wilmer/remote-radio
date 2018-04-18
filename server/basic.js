const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {

      client.send(message)


      // if (client !== ws && client.readyState === WebSocket.OPEN) {
      //   client.send(message);
      // }
    });
  });

  console.log('new connection!')
});

console.log('listening on 8080!')
