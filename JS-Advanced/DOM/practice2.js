console.log("hello");

let button=document.createElement("button");
button.innerText="Click Me";
button.style.backgroundColor="red";
button.style.color="white";
button.style.height="30px";
button.style.width="130px";


document.querySelector("body").prepend(button);