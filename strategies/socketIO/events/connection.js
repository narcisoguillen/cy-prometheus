const {Counter} = require('prom-client');

let connections = new Counter({
  name       : 'connections',
  help       : 'WebSocket connections',
  labelNames : []
});

module.exports = function(socket){
  connections.inc();
};
