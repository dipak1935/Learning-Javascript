console.log("hello");

class Parent{
    greet(){
        console.log("Hello World");
    }
}


class Child extends Parent{

}

let child1=new Child();
child1.greet();








class Person{
    constructor(){
        this.species="homo sapiens";
    }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){

        super.eat();
        console.log("work");
    }
}


let eng1=new Engineer("CSE");
eng1.work();
eng1.eat();
eng1.sleep();
console.log(eng1.species);