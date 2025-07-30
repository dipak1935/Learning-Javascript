console.log("hello");


const getPromise=()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("I am a promise");
            reject("unsucess");

        },5000);

        
    });
};


let promise=getPromise();

promise.then((res)=>{
    // console.log(res);
    console.log("Promise fulfilled",res);
});

promise.catch((err)=>{
    console.log(err);
    console.log("Promise unfulfilled.",err);
})

