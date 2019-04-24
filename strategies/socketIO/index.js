module.exports = function(prometheus){
  if(!prometheus.socketIo){ return false; } // nothing to do

  prometheus.socketIo.on('connection', require('./events/connection'));
  prometheus.socketIo.use(require('./handshakes'));
};
