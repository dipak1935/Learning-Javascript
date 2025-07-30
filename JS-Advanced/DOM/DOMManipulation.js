let box=document.querySelector("#box");
console.log(box);

let attribute=box.getAttribute("id");
console.log(attribute);

// let image=document.querySelector("#image");
// console.log(image);

// let att1=image.getAttribute("name");
// console.log(att1);
// image.setAttribute("name","nature's picture");
// console.log(image.getAttribute("name"));


box.style.backgroundColor="beige";

box.style.fontSize="25px";

box.innerText="This is not a Div";



let newButton=document.createElement("button");
newButton.innerText="Button";


// box.append(newButton);

let para=document.querySelector("#paragraph");
para.after(newButton);

newButton.setAttribute("width","20px");
newButton.setAttribute("height","20px");


let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Learning About DOM Manipulation</i>";


let body=document.querySelector("body").prepend(newHeading);

let button2=document.createElement("button");
button2.innerHTML="<b>Click Me</b>";

newButton.after(button2);

button2.remove();