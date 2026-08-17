// function in javascript
console.log("Basic javascript function known as synchronous function");
function hello ()
{
 console.log("this js function");
}
hello();
console.log("synchronous javascript");

// Asynchronous java script
// arrow function
// variable: var,let and const
//syntax : ()=>{}

    const bye = ()=>{
        console.log("this is an asynchronous function");
        setTimeout(()=>{
            console.log("A");
        }, 2000);
    }
    bye();
console.log("B");

//function as parameter argument 
function hii(n1,n2)
{
    console.log(n1+n2);
    console.log(arguments);
    

}
let a=10;
let b=20;
hii(a,b);
