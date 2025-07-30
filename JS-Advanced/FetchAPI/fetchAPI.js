console.log("hello");

const URL="https://meowfacts.herokuapp.com/";
const fact=document.querySelector("#facts");
const btn=document.querySelector("#btn");


const getFacts=async ()=>{

    console.log("fetching data...");

    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    let text=fact.innerText=data.data[0];
    console.log(data);
    console.log(text);
}


btn.addEventListener(("click"),getFacts);


 

