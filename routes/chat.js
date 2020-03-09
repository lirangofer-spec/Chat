const express = require('express');
const Room = require('../models/room');
const router = express.Router();

router.get('/chat', async function(req, res) {
    const rooms = await Room.find({ name: { '$ne': 'lobby' }}).select('name');
    const lobby = await Room.findOne({ name: 'lobby' });
    res.render('chat', { rooms: rooms, activeRoom: lobby });
});


const chat = require('../chat');
router.post('/ping', async function(req, res) {
    chat.io.sockets.emit('message', { from: 'Server', text: 'Ping!' });
    res.send(200);
});

router.get('/', async function(req, res) {
    const roomname = req.param('roomMessages');
    const messages = await Room.findOne({ name: roomname });
    res.setHeader('Content-Type', 'application/json');
    console.log(messages);
    delete messages.messages._id;
    console.log(messages.messages);
    res.json(messages.messages);
  });

module.exports = router;