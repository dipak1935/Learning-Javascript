console.log("hello");


// creating a simple object.


// const student={
//     fullName:"dipak kumar",
//     marks:84.5,
//     printMarks:function(){
//         console.log("marks :",this.marks)
//     },

// };


// console.log(student);

// console.log(student["fullName"]);
// console.log(student.marks);
// student.printMarks();




const employee={
    calTax(){
        console.log("tax rate is 10%");
    },

    calTax2:function(){
        console.log("tax rate is 20%");
    }
}


const karan={
    salary:10000,
    calTax(){
        console.log("tax rate is 20%");
    }
}

// using __proto__ we can inject all the properties one object to other.(similar to inheritance)

karan.__proto__ = employee;

console.log(karan.calTax());
console.log(karan.super.calTax());