const EventEmitter = require('events');
const uuid = require ('uuid'); // displays 

class Logger extends EventEmitter{

    log(msg) {
        // Call event and pass id and message into listener
        this.emit('message', { id: uuid.v4(), msg: msg });
    }
}

//module.exports = Logger;

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener', data));

logger.log('hello world'); 
logger.log('hi world'); 
logger.log('u world'); 
