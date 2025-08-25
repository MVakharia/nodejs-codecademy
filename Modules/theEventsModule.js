let events = require('events');

let yourEmitter = new events.EventEmitter();

let newUserListener = (data) => {
    console.log(`We have a new user: ${data}.`);
};

//Assign the newUserListener function as the listener callback for 'new user' events.
yourEmitter.on('new user', newUserListener);

yourEmitter.emit('new user', 'Lily Pad');

yourEmitter.off('new user', newUserListener);

yourEmitter.emit('new user', 'Lily Pad');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

let myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'my birthday!');