console.log("hello");


const button=document.querySelector("#button");
console.log(button);

let currMode="light";

button.addEventListener("click",()=>{

    if(currMode==="light"){
        document.body.style.backgroundColor="grey";
        button.innerText="Dark Mode";
        currMode="dark";
    }
    else if(currMode==="dark"){
        document.body.style.backgroundColor="white";
        button.innerText="Light Mode";
        currMode="light";
    }

    console.log(currMode);
})
