let heading=document.querySelector("#heading");
console.log(heading);
console.log(heading.innerText);

heading.innerText=heading.innerText+" from Apna College";


let div=document.querySelectorAll(".box");
console.log(div);


console.log(div[1]);

// div[0].innerText+=" Div";
// div[1].innerText+=" Div";
// div[2].innerText+=" Div";

for(let divs of div){
    divs.innerText="Something";
}