// for each

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//   console.log(element);
// }

// //individual element print
// print(numbers[0]); // 1
// print(numbers[1]); // 2

// //for-each loop
// numbers.forEach(print); // 1- 9 in new line each

//function

//1
// numbers.forEach(function (el) {
//   console.log(el);
// });

// //above in for loop method

// for (let el of numbers) {
//   console.log(el);
// }

//2

// numbers.forEach(function (el) {
//   //even numbers
//   if (el % 2 == 0) {
//     console.log(el);
//   }
// });

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

// //90/100

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

//map method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubles = numbers.map(function (num) {
  return num * 2; // ans = [2, 4, 6, 8, 10, 12, 14, 16, 18]
});

const movies = [
  {
    title: "hello",
    score: 99,
  },
  {
    title: "new",
    score: 23,
  },
  {
    title: "para",
    score: 81,
  },
];

const title = movies.map(function (movie) {
  //   return movie.title;
  //   return movie.title.toLocaleUpperCase();
  return movie;
});
