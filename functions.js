//writing funtions in javascript

// function singSong() {
//   console.log("Sidharth");
//   console.log("Jain");
//   console.log("is here.");
// }

// //calling function

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// /functions with arguments

// function greet(firstName) {
//   console.log(`Hey there: ${firstName}`);
// }

// function rant(message) {
//   console.log(message);
// }

// for (let m of message) {
//   console.log(m);
// }
// rant("I hate beets");

//messgae print 3 times on console with uppercase output when arg is in lowercase
// function rant(message) {
//   for (let i = 0; i < 3; i++) {
//     console.log(message.toUpperCase());
//   }
// }

// function with 2 args

// function greet(firstName, lastName) {
//   // console.log(`hey there! ${firstName} ${lastName}`);
//   console.log(`hey there! ${firstName} ${lastName}.`);
// }

// greet("Sid", "Jain");

// //repeat function

// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

//return in function

// function add(x, y) {
//   // return x+y;
//   //OR
//   // let sum = x + y;
//   // return sum;

//   //using conditions
//   if (typeof x !== "number" || typeof y !== "number") {
//     // x and y both has to be numbers for execution
//     return false;
//   }
//   //no need oef else becuase it will go below if abpve stmt is false
//   // let sum = x + y;
//   // return sum;
//   //OR
//   return x + y;
// }

// scope

// let totalEggs = 0; // global scope
// function collectEggs() {
//   // let totalEggs = 6; // scoped inside function only
//   // console.log(totalEggs); // will print 6
//   totalEggs = 6; // updated qty of eggs
// }

// // console.log(totalEggs); // error - Uncaught ReferenceError: totalEggs is not defined

// // collectEggs();
// // console.log(totalEggs); // Uncaught ReferenceError: totalEggs is not defined

// // after global scope an updation in functional scope

// console.log(totalEggs); // 0 = global scope
// collectEggs();
// console.log(totalEggs); // 6 after updation of qty

// let bird = "pigeon";

// function birdWatch() {
//   // 1
//   // let bird = "crow";
//   // console.log(bird); // will print crow
//   //2
//   // console.log(bird); // pigeon print
//   //3
//   // console.log(bird); // Uncaught ReferenceError: Cannot access 'bird' before initialization
//   // let bird = "crow";
// }

// birdWatch();

// //block scope
// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "Hi";
// }

// console.log(radius); // 8
// // console.log(PI); // Uncaught ReferenceError: PI is not defined
// // console.log(msg); // Uncaught ReferenceError: msg is not defined

// function bankRobbery() {
//   const heroes = ["Spiderman", "Batman", "Superman"];
//   function forHelp() {
//     for (let hero of heroes) {
//       console.log(`Please save us!, ${hero.toLocaleUpperCase()}`); //nothing appear at first have to call fucntion
//     }
//   }
//   forHelp(); //nothing printed
// }

// // bankRobbery(); // all 3name printed.

//inner function

// function bankRobbery() {
//   const heroes = ["Spiderman", "Batman", "Superman"];
//   function forHelp() {
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`Please save us!, ${hero.toLocaleUpperCase()}`); //nothing appear at first have to call fucntion
//       }
//     }
//     inner();
//   }
//   forHelp(); //nothing printed
// }

// bankRobbery(); // all 3name printed.

//function expressions

//normal function

// function add(x, y) {
//   return x + y;
// }

//above function converted to function expression

// const add = function (x, y) {
//   return x + y;
// };

//higher order functions

// function callTwice(func) {
//   // function as an args in anotehr function
//   func();
//   func();
// }
//1
// callTwice(1); // Uncaught TypeError: func is not a function

//2
// function rollDice() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDice); // calling function in a function as an arg

//3
// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDice() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDice); // calling function in a function as an arg

//higher order function - returning a function

// function makeMystery() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congrats,return function ok");
//     };
//   } else {
//     return function () {
//       alert("not working returning function");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(19, 64);

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// makeBetweenFunc(50, 100);

//arrow functions

//normal function expression
// const add = function (x, y) {
//   return x * y;
// };

//converted into arrow function  -- saved into some variable, cant be used directly
// const addArrow = (x, y) => x * y;

// const movies = [
//   {
//     title: "hello",
//     score: 99,
//   },
//   {
//     title: "new",
//     score: 23,
//   },
//   {
//     title: "para",
//     score: 81,
//   },
// ];

// const title = movies.map(function (movie) {
//   return movie;
// });

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

//implicit returns in arrow function
// const rollDie = () => (
// Math.floor(Math.random() * 6) + 1
// );

//one liner w./o () parens
// const rollDie2 = () => Math.floor(Math.random() * 6) + 1;

//setTimeout
//1
// setTimeout(() => {
//   console.log("hello");
// }, 3000);

//2
// console.log("hello");
// setTimeout(() => {
//   console.log(" are you there?");
// }, 2000);

// console.log("goodbye!");

//setInterval
//1 - infinite - no stopping
// setInterval(() => {
//   console.log(Math.random());
// },2000);

//setInterval - with stopping criteria
// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//clearInterval(id) - to stop above function setInterval()

//default params
//1
// function rollDie(numSides) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

//if we dont netr number in paranthesis - it will give Nan as answer as it is undefined

//2
// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6; // will print number till 6 when rolldie() - no number in paranthesis
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

//3  with default values/params with order

function rollDie(numSides = 6) {
  // with default value provided above so NaN will not come in output
  return Math.floor(Math.random() * numSides) + 1;
}

//
function greet(msg, person) {
  console.log(`${msg} , ${person}`);
}

//order matters while providing default values
// function greet2(msg = "hello there", person) {
function greet2(person, msg = "hello there") {
  //default parameters comes first in order
  console.log(`${msg}, ${person}`);
}

//if we provide values in msg above then default value provided will be over rided.
