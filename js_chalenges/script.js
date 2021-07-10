//Numbers from 1 to 10
for(let i=1; i<11; i++){
    console.log(i);
};

//Odd numbers less than 100
for (let i = 1; i < 100; i+=2) {
    console.log(i);
   }

//Multiplication table with 7

let table7 = 7;
for (let i=1; i<=10; i++){
console.log(table7 + " * " + i + " = " + table7*i);  
}

//Multiplication tables with numbers from 1 to 10
for(let a = 1; a < 10; a++){
    for(let b = 1; b < 10; b++){
        console.log(a + "*" + b + " = " + a*b)
    }
}

//Calculate the sum of numbers from 1 to 10
const numbers =[1,2,3,4,5,6,7,8,9,10];
const sumOfNumbers = numbers.reduce((acumulator, currentValue)=>{
    return acumulator+currentValue
} );
console.log(sumOfNumbers);

//Calculate factorial
let fNumber = 10;
let total = 1;

for (i = 0; i < fNumber; i++){
    total = total * (fNumber - i);
}
console.log(total);


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
const difNumbers = [1, -1, 2, 3, -5, 7, 10, -7];
const positiveNumbers = difNumbers.filter(num => num >0) 
console.log(positiveNumbers);


//Rotate an array to the left 1 position
var rotateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    i = rotateArray.length;

while (i--) {
    console.log(rotateArray.join(' '));
    rotateArray.unshift(rotateArray.pop());
}
console.log(rotateArray.join(' '));


//Print the first 100 prime numbers
for (let i = 1; i < 100; i++) {
    console.log(i);
   }


 //function that will merge two arrays and return the result as a new array
const summerFruits = ["cherry", "strawberry", "raspberries"];
const fallFruits = ["grape", "apple", "pear"];
let allFruits = summerFruits.concat(fallFruits);
console.log(allFruits);


   //function that receive an array of numbers as argument and will return a new array with distinct elements
   const marketFruits = ["cherry", "strawberry", "banana", "apples", "mango", "pomegranate","fig", "kiwi"];
   const shortNameOfFruits = marketFruits.filter(fruits => {
       return fruits.length < 5;
   });
   console.log(shortNameOfFruits);


  //Reversed array
  marketFruits.reverse();
  console.log(marketFruits);


   // function that return the number of words in text
   function WordCount(str) { 
    return str.split(" ").length;
  }
  console.log(WordCount("Amy normally hated Monday mornings, but this year was different. Kamal was in her art class and she liked Kamal. She was waiting outside the classroom when her friend Tara arrived."));