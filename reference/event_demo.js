const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter ();

// Event Listener function(err) = err =>
myEmitter.on('event', function() {console.log('Event Fired');});

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

// create EventEmitter class, emit events and
// have listeners that will listen for those events and perform function
