console.log("hello");

function getData(data,getNextData){

    setTimeout(()=>{
        console.log("data: ",data);

        if(getNextData){
            getNextData();
        }
        
    },2000);

    
    
}

// CALLBACK HELL

getData("dipak",()=>{
    getData("mannu",()=>{
        getData("alok",()=>{
            getData("rajat");
        });
    });
});

