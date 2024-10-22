let events = require("events");
const { emitWarning } = require("process");
const { EventEmitter } = require("stream");

let emitter = new EventEmitter();
let eventName = "hello";

emitter.on(eventName, (e)=>{
    console.log("Hello " + e);
});

emitter.on(eventName, (e)=>{
    console.log("Good by " + e);
});

emitter.emit(eventName, "world");