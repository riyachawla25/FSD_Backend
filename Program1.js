// Program 1: Create Custom EventEmitter

const EventEmitter = require("events");

// Create custom EventEmitter class
class MyEmitter extends EventEmitter {}

// Create object
const event = new MyEmitter();

// Register greet event
event.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

// Register exit event
event.on("exit", () => {
    console.log("Exits My Custom Event Emitter...");
});

// Trigger events
event.emit("greet", "CSE24");
event.emit("exit");