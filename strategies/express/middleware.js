const {Counter}    = require('prom-client');
const {Summary}    = require('prom-client');
const ResponseTime = require('response-time');

let numOfRequests = new Counter({
  name       : 'numOfRequests',
  help       : 'Number of requests made',
  labelNames : ['method']
});

let pathsTaken = new Counter({
  name       : 'pathsTaken',
  help       : 'Paths taken in the app',
  labelNames : ['path']
});

let responses = new Summary({
  name       : 'responses',
  help       : 'Response time in milliseconds',
  labelNames : ['method', 'path', 'status']
});

module.exports = function(prometheus){

  let responseTime = ResponseTime(function(req, res, time){
    responses.labels(req.method, req.url, res.statusCode).observe(time);
  });

  return function(req, res, next){
    if(req.path === prometheus.endpoint){ return next(); }

    numOfRequests.inc({ method: req.method });
    pathsTaken.inc({ path: req.path });

    return responseTime(req, res, next);
  };
};
