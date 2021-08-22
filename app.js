const {WebSocketServer} = require('ws');

const wss = new WebSocketServer({port: 3000});

wss.on('connection', ws => {
  ws.send('Connected to Node');

  ws.on('message', message => {
    console.log('received: %s', message);
    ws.send(`Echo back from server: ${message}`);
  });
});
