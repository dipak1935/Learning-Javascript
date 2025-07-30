console.log("hello");

class Toyota{

    price;
    noOfTyres=4;
    carType;
    constructor(){
        console.log("Creating new Object");
    }

    // constructor(noOfTyres){
    //     this.noOfTyres=noOfTyres;

    // }

    setCarType(type){
        this.carType=type;
    }
    
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}

console.log(typeof Toyota);

let fortuner=new Toyota(4);

fortuner.start();
fortuner.stop();
fortuner.price=10000;
console.log(fortuner.price);
console.log(fortuner.noOfTyres);
console.log(fortuner.carType);
fortuner.setCarType("EV");
console.log(fortuner.carType);



let lexus=new Toyota();
lexus.start();
