const {Counter} = require('prom-client');

let WebSocketErrors = new Counter({
  name       : 'socketErrors',
  help       : 'Errors on websocket connection',
  labelNames : ['error']
});

module.exports = function(error){
  WebSocketErrors.inc({ error });
};
