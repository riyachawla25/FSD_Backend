//Event 
// EventEmmiter is a class in which we have to use emit("event emit parameter") for trigger/create/fire event and on("emit parameter",callback function) is a listerner that 
// Program 1 and 2
// emit() and on()
const EventEmmiter = require("events");
const event = new EventEmmiter();
event.on("greet",()=>{
    console.log("this is event emmiter");
})
event.emit("greet");


