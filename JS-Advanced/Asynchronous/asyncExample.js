// Asynchronous Programming example

console.log("one");
console.log("two");

function greet(){
    console.log("Hi");
}

setTimeout(greet,6000);

setTimeout(()=>{
    console.log("setTimeOut functions is being used!!!");
},3000);

console.log("three");
console.log("four");
