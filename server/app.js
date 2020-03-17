const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const nx = next({ dev })
const handle = nx.getRequestHandler()

nx.prepare().then(() => {
  const app = express()
  const server = createServer(app)
  const io = socketIO(server);

  io.on('connection', socket => {
    console.log('a user connected.');

    socket.on('SEND_MESSAGE', data => {
      io.emit('RECEIVE_MESSAGE', data);
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected.');
    });
  });

  app.get('/item', (req, res) => {
    res.send({ hello: 'world' })
  })

  app.get('*', (req, res) => handle(req, res, parse(req.url, true)))

  server.listen(port, () => {
    console.log(` > Ready on http://localhost:${port}`)
  })
})
