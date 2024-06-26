// Hoisting

// // Following are hoisted ( var and function )
// console.log(x); // undefined
// var x = 5;

// foo(); // "Hello!"

// function foo() {
//   console.log("Hello!");
// }

// // not hoisted
// bar(); // TypeError: bar is not a function

// var bar = function () {
//   console.log("World!");
// };

// //Hoisting with var
// console.log(x); // What will this print?
// var x = 10;
// console.log(x); // What will this print?

// let y = 20;
// {
//   let y = 30;
//   console.log(y); // What will this print?
// }
// console.log(y); // What will this print?

// const PI = 3.14;
// PI = 3.14159;
// console.log(PI); // What will this print?

// var z = 100;
// function example() {
//   var z = 200;
//   console.log(z); // What will this print?
// }
// example();
// console.log(z); // What will this print?

// //Clousure

// function outerFunction() {
//   let outerVar = "I'm outer";
//   function innerFunction() {
//     console.log(outerVar); // innerFunction has access to outerVar
//   }
//   return innerFunction; // Return innerFunction
// }
// let closure = outerFunction(); // Call outerFunction, closure now holds innerFunction
// closure(); // Call closure, innerFunction still has access to outerVar

// function createCounter() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// let counter1 = createCounter();
// let counter2 = createCounter();

// console.log(counter1()); // What will this print?
// console.log(counter1()); // What will this print?
// console.log(counter2()); // What will this print?
// console.log(counter2()); // What will this print?
// console.log(counter1()); // What will this print?

//Spread and Rest Operator
//Spread operator

// const arr = [1, 2, 3];
// console.log(...arr);

//Copying array

// const arr = [1, 2, 3];
// const arr2 = [...arr];
// console.log(arr2);

//Merging the array
// const arr1 = [1, 2, 3];
// const arr2 = [7, 8, 9];

// const mergedArr = [...arr1, ...arr2];

// console.log(mergedArr);

//Rest operator
const arr1 = [1, 2, 3, 4, 6];
const arr2 = [one, two, ...arr1];

console.log("arr2", arr2);
