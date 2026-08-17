// Callback Example
function hello(n1, n2, callback) {
  console.log("Hello World");
  callback();
}

let a = 10;
let b = 20;

hello(a, b, sayHi);
hello(a, b, sayHello);

hello(a, b, function demo() {
  console.log("Callback is Calling");
});

function sayHi() {
  console.log("Callback Function");
}

function sayHello() {
  console.log("This is second callback function");
}

// Promises
//const promiseOne = new Promise((resolve, reject) => {
//  console.log("successful data passed");
//  resolve ("resolve promises");
//});
//promiseOne.then((result)=>{
//   console.log(result);
//}).catch((error)=>{
//   console.error(error);
//});


// new Promise(function(resolve,reject){
// setTimeout(function(){
//   console.log("Asynchronous Task");
//   resolve();
// },1000)
// }).then(function(result){
//   console.log("Asynchronous task 2");
// }).catch()


new Promise(function(resolve,reject){
setTimeout(function(){
  let msg=true;
  if(!msg)
  {
    resolve("user:Asynch task");

  }
  else
  {
    reject("error: undefined data");
  }
  console.log("Asynchronous Task");

},1000)
}).then(function(result){
  console.log("Asynchronous task 2");
}).catch(function(error){
  console.log(error);
});



