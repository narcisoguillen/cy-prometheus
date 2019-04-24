Cy-Prometheus
==============

# Install

```
 npm install cy-prometheus
```

# Options
* `express` : *required* express app
* `socketIo`	: socketIo instance

# Example
```
const Prometheus = require('cy-prometheus');

let prometheus = new Prometheus({
  express  : app  ,
  socketIo : sio
});
```
