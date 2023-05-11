// // methods  in js

// const myMath = {
//   PI: 3.14519,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// //shorthand of above method

// const myMAth2 = {
//   PI: 3.14,
//   square2(x) {
//     return x * x;
//   },
//   cube2(x) {
//     return x ** 3;
//   },
// };

// //this keyword

// const cat = {
//   name: "Blue steele",
//   color: "grey",
//   breed: "scottish",
//   meow() {
//     // console.log("meow meow meow");
//     // console.log(color); // Uncaught ReferenceError: color is not defined
//     //using this
//     console.log(this.color); // grey - color of cat object access now through the method meow
//     console.log(this); // this keyword refers to cat object(its prperties) in here
//   },
// };

// //defining in open refereds to main object that is window in below case which cat2 refers to
// const cat2 = cat.meow; //cat2() -?> this.color not printing as this keyword refers to window object here

//try - catch
//1
// hello.toUpperCase(); // Uncaught ReferenceError: hello is not defined
//2
// try{
//     hello.toUpperCase(); // Uncaught SyntaxError: Missing catch or finally after try (at methods.js:49:1)
// }

//3

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("Error"); // Error print in console code dont stop comes in catch block
// }

// console.log("After try catch stmt ex"); // execurted and prints After try catch stmt ex -- code doesnt stop

//filter method
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// const odd = nums.filter((n) => {
//   return n % 2 === 1;
// });

// const smallNums = nums.filter((n) => n < 5);

// console.log("", odd);
// console.log(smallNums);

//reduce mthod
const egReduce = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
