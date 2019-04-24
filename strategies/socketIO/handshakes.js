const {Counter} = require('prom-client');

let handshakeAttempts = new Counter({
  name       : 'handshakeAttempts',
  help       : 'Number of handshake attempts',
  labelNames : ['transport']
});

module.exports = function(socket, next){
  handshakeAttempts.inc({ transport : socket.handshake.query.transport });
  socket.on('error', require('./events/error'));
  return next();
};
