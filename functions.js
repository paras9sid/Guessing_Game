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
