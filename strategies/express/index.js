const Client       = require('prom-client');
const middleware   = require('./middleware');

module.exports = function(prometheus){
  prometheus.app.use(middleware(prometheus));
  prometheus.app.get(prometheus.endpoint, (req, res) => {
    res.set('Content-Type', Client.register.contentType);
    res.end(Client.register.metrics());
  });
};
