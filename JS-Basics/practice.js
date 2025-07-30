// 1. Create a const object called "product" to store information shown in the picture.

const product={

    image:5555,
    fullName:"Parker Jotter CT Ball Pen(Black)",
    rating:4.0,
    reviews:7002,
    dealOfTheDay:true,
    discountedPrice:270,
    originalPrice:285,
    discountPercentage:5
}


// 2. Create a const object called "profile" to store information shown in the pictures.


const profile={

    image:1234,
    userName:"shradhakhapra",
    verified:true,
    isFollowed:false,
    posts:195,
    followers:"569K",
    following:4,
    fullName:"Shradha Khapra",
    title:"Entrepreneur",
    Bio:"Apna College | Ex-Microsoft,DRDO"

}


// 3. Get user to input number using prompt("Enter a number:").Check if the number is a multiple of 5 of not.


// let num=prompt("Enter a number: ");

// if(num%5===0){
//     console.log("Number is a multiple of 5");
// }
// else{
//     console.log("Number is not a multiple of 5");
// }



// 4. Write a code which can give grades to students according to their scores.


// let marks=prompt("Please enter your marks : ");

// if(marks>=90 && marks<=100){
//     console.log("Grade :A");
// }
// else if(marks>=70 && marks<=89){
//     console.log("Grade :B");
// }
// else if(marks>=60 && marks<=69){
//     console.log("Grade :C");
// }
// else if(marks>=50 && marks<=59){
//     console.log("Grade :D");
// }
// else{
//     console.log("Fail");
// }


// 5. Print all even numbers from 0 to 10.


// for(let i=0;i<=10;i++){
//     if(i%2==0)
//     console.log(i);
// }


// 6. Create a game where you start with any random game number.Ask the user to keep guessing the game number
//    until the user enters correct value.



// let gameNumber=25;
// let guessNumber=prompt("Enter you guess :");

// while(guessNumber != gameNumber){

//     guessNumber=prompt("Enter you guess :");


// }

// console.log("You guess is correct.You win the game.")



// 7. Prompt the user to enter their fullname.Generate a username for them based on the input.Start username with @,followed by their
//    fullname and ending with the fullname length.
//    eg.fullname="shradhakhapra",username="@shradhakhapra13".



// let fullname=prompt("Enter your name :");

// let username="@"+fullname+fullname.length;

// console.log(username);



// 8. For a given array with marks of students->[85,97,44,37,76,60].
//    Find the average marks of the entire class.

// let marks=[85,97,44,37,76,60];

// let sum=0;
// for(let i of marks) sum+=i;
// let averageMarks=sum/(marks.length);

// console.log("the average marks of class is ",averageMarks);



// 9. Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".


// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];


// companies.shift();

// console.log(companies);

// companies.splice(2,1,"Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);





// 10. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the String.


const countOfVowels=(str)=>{

    let count=0;
    for(let i=0;i<str.length;i++){
        
        let character=str[i];

        if(character==="a"||character==="e" || character==="i"||character==="o"||character==="u") count++;

    }

    return count;
}


console.log(countOfVowels("aeiou"))