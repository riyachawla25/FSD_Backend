//Asynchronous js using async/await
async function test ()
{
    console.log("2:message");
    console.log("3:message");
    console.log("4:message");
}
console.log("1.message");
test();
console.log("5:message");

// create promises that resolve with Assignment Submitted and print using then(),reject with submission failed

// async function for data json fetch
async function data()
{
await console.log("2:message");
const response= await fetch("./studentdata.json");
console.log(response.status);
const std=await response.json();
return std;
await console.log("3.message");
console.log("4:message");
}