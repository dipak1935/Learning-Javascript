console.log("hello");

let button=document.querySelector("#btn");

button.onclick=(event)=>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);
    console.log("You have pressed the button.");
}


let box=document.querySelector("#box");
// console.log(box);

box.onmouseover = (e) =>{
    // console.log(e);
    console.log("Inside the box.");
}



let btn2=document.querySelector("#btn2");
// console.log(btn2);


btn2.addEventListener("dblclick",()=>{
    console.log("BUTTON was clicked!!!");
})

btn2.addEventListener("mouseover",(event)=>{

    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log("Inside BUTTON !!!");
})