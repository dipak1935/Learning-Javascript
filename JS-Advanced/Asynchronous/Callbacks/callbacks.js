// console.log("hello");

// Callbacks:A callback is a fxn passed as an argument to another function.


function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){

    sumCallback(a,b);
}

calculator(10,5,sum);


let a=100;
let b=5;
calculator(100,5,(a,b)=>{
    console.log(a*b);
})


const hello=()=>{
    console.log("hello ");
}



setTimeout(hello,5000);