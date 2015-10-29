var events = require('events');
var eventEmitter = new events.EventEmitter();

var doSomething = function doSomething() {
  console.log('we did something, yay !');
};

eventEmitter.on('custom-event', doSomething);

eventEmitter.emit('custom-event');
