const Client = require('prom-client');

module.exports = class Prometheus{

  constructor(settings){
    this.settings = settings;

    if(!this.settings.app){ throw new Error('Missing express server'); }

    this.prefix   = settings.prefix ? `${settings.prefix}_` : '';
    this.app      = settings.app;
    this.socketIo = settings.socketIo;
    this.endpoint = settings.endpoint || '/metrics';

    Client.collectDefaultMetrics({ prefix : this.prefix });

    // Load strategies
    require('./strategies/express')(this);
    require('./strategies/socketIO')(this);
  }

};
