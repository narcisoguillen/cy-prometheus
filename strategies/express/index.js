const Client       = require('prom-client');
const middleware   = require('./middleware');

module.exports = function(app){
  app.use(middleware);
  app.get('/metrics', (req, res) => {
    res.set('Content-Type', Client.register.contentType);
    res.end(Client.register.metrics());
  });
};
