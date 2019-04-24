module.exports = function(io){
  if(!io){ return false; } // nothing to do

  io.on('connection', require('./events/connection'));
  io.use(require('./handshakes'));
};
