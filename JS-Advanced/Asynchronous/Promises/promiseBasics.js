console.log("hello");


// Promise Example

// let promise=new Promise((resolve,reject)=>{

//     console.log("I am a promise object");

//     resolve("success");

//     // reject("some errors occured");
// })


// How its used.


function getData(data,getNextData){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("data : ",data);
            resolve("success");
            if(getNextData){
                getNextData();
            }

        },5000);

    });
}

// getData("dipak",getData("mannu",getData("alok"))); 