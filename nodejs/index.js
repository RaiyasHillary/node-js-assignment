const EventEmitter = require('events');
const logEvent = require('./logEvents');
class emitter extends EventEmitter{}
const myEmitter = new emitter();

myEmitter.on('logs', (msg) => logEvent(msg));

const emitLogEvent = () => {
    try {
        myEmitter.emit('logs', 'my log event');
    } catch (error) {
        console.error('Error emitting log event:', error);
    }
};


setTimeout(()=>{
    emitLogEvent()
}, 2000);