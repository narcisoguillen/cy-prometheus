const Client = require('prom-client');

module.exports = class Prometheus{

  constructor(settings){
    this.settings = settings;

    if(!this.settings.express){ throw new Error('Missing express server : app'); }

    Client.collectDefaultMetrics();

    // Load strategies
    require('./strategies/express')(this.settings.express);
    require('./strategies/socketIO')(this.settings.socketIo);
  }

};
