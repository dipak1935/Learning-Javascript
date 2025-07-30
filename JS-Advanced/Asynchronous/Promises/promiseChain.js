console.log("hello");


function asyncFunction1(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("data1");
            resolve("success");

        },4000);
    })
}

function asyncFunction2(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("data2");
            resolve("success");

        },6000);
    })
}







// Without promise chaining.



// console.log("fetching data1");
// let promise1=asyncFunction1();

// promise1.then((res)=>{
//     console.log(res);
// });


// console.log("fetching data2");
// let promise2=asyncFunction2();

// promise2.then((res)=>{
//     console.log(res);
// });






// Buid-Up


// console.log("fetching data1");
// let promise=asyncFunction1();
// promise.then((res)=>{
//     console.log(res);

//     console.log("fetching data2");
//     let promise2=asyncFunction2();
    
//     promise2.then((res)=>{
//         console.log(res);
//     })
    

// });





// console.log("fetching data1");
// asyncFunction1().then((res)=>{
//     console.log(res);

//     console.log("fetching data 2");

//     asyncFunction2().then((res)=>{
//         console.log(res);
//     })
// })





// promise chaining



console.log("fetching data1");

asyncFunction1().then((res)=>{
    console.log(res);

    console.log("fetching data2");
    return asyncFunction2();
}).then((res)=>{
    console.log(res);

})