// alert("Hello first program via html of js");
// console.log("printing in console");
// let total = 1 + 3;

// // conditional statements - if-else
// let rating = 3;

// if (rating === 3) {
//   console.log("you are on path to become a genius");
// } else {
//   console.log("renter rating or check rating");
// }
// let random = Math.random();

// if (random < 0.5) {
//   console.log("If - Your num is less than 0.5");
//   console.log(random);
// } else if (random > 0.5 && random < 1.0) {
//   console.log("Else - num greater than 0.5");
//   console.log(random);
// } else {
//   console.log("invalid");
// }

//password conditions

// const password = prompt("Please enter a new password!");

// if (password.length >= 6) {
//   //   console.log("Long Enough Password");

//   //password cant have space in between
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.log("Invalid Password cant contain spaces");
//   }
// } else {
//   console.log("Password too short! Enter min 6 chars");
// }

// //password cant have space in between
// if (password.indexOf(" ") === -1) {
//   console.log("Good job no space");
// } else {
//   console.log("Password cant contain spaces");
// // }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Valid Password");
// } else {
//   console.log("Invalid Format For Password");
// }

//switch stmt

// const password = prompt("Please enter a password!");

// const day = 5;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("invalid");
// }

//for loop
//print 1 - 10 with 1-2 lines except printing every line again and again write 10 lines of code for printing 10nos
// for (let i = 1; i <= 10; i++) {
//   // console.log("I am in the loop body");
//   console.log(i);
//   // console.log("I am in the loop body");
// }

//even nos print

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

//back counting from 100 - 0 skip[ 10 each time like 100 90 80 etc
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

//looing over arrays
// let animals = ["zebra", "lion", "horse"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

//OR = length-1 scenario = with length condition

// for (let i = 0; i <= animals.length - 1; i++) {
//   console.log(i, animals[i]); // i = index num , animals[i] - element in index that is animals name in string written in array
// }

//decresing to inceasing order

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

//nested loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);

//   //nested loops
//   for (let j = 1; j < 4; j++) {
//     console.log(`    j is : ${j}`);
//   }
// }

// const seatingChart = [
//   ["gary", "rahul", "sita"],
//   ["ramesh", "suresh", "raina"],
//   ["lokesh", "dinesh", "umesh", "pawan"],
// ];

// // for (let i = 0; i < seatingChart.length; i++) {
// //   console.log(i, seatingChart[i]);
// // }

// //nested loops

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//while loop

// let count = 0;

// while (count < 10) {
//   // count++; // will print till 1-10 as plus is first then print
//   console.log(count);
//   count++; // will print till 0-9 as plus is after print
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code");

// while (guess !== SECRET) {
//   guess = prompt("enter the secret code!!!");
// }

// console.log("Congrats! you got the secret");

//for...of loop

// const subreddits = ["cringe", "books", "chickens", "funny", "pics"];

// //normal for loop
// // for (let i = 0; i < subreddits.length; i++) {
// //   console.log(`visit reddit.com/r/${subreddits[i]}`);
// // }

// //for...of loop
// for (let sub of subreddits) {
//   console.log(`Visit redditcom/r/${sub}`);
// }

//strings

// for (let char of "hello world") {
//   console.log(char);
// }

//iterating over objects

const testScores = {
  sid: 100,
  aasha: 100,
  rohan: 90,
  rohit: 80,
  loky: 99,
};

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`);
// }

//summing all scores - integer
// let total = 0;
// for (let score of Object.values(testScores)) {
//   // console.log(score); // will print scores in console
//   total += score; // print toal in console and enter - toal summ will appear in console
// }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//   // console.log(score); // will print scores in console
//   total += score; // print toal in console and enter - toal summ will appear in console
// }

// console.log(total / scores.length);
