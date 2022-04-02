import EventEmitter from "events";

// Creating class
class MyEmitter extends EventEmitter {}

// Creating Object

const myEmitter = new MyEmitter();

// Example 1
// // Register event listener
// myEmitter.on('event',()=>{
//     console.log('An event occured!')
// })

// // Trigger Event
// myEmitter.emit('event')

// Register event listener
myEmitter.once("event", () => {
  console.log("An event occured!");
});

// Trigger Event
myEmitter.emit("event");
