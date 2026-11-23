//Program 1.2
//Simulate DOM-like event handling in Node.js using events 
// Import EventEmitter
const EventEmitter = require("events");

// Create an object
const event = new EventEmitter();

// Register event listeners (similar to addEventListener)
event.on("click", () => {
    console.log("Button clicked!");
});

event.on("mouseover", () => {
    console.log("Mouse is over the button.");
});

event.on("dblclick", () => {
    console.log("Button double-clicked!");
});

// Emit events (similar to browser events)
event.emit("click");
event.emit("mouseover");
event.emit("dblclick");