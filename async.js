//async kyword used , always return a promise

// async function hello() {}

//1
// const sing = async () => {}; // Promise {<fulfilled>: undefined}

// //2
// const sing2 = async () => {
//   return "LA LA LA LA"; //Promise {<fulfilled>: 'LA LA LA LA'}
// };

// sing2().then((data) => {
//   console.log("Promise resolved! ", data);
// });

//3 with error
// const sing3 = async () => {
//   throw "Oh no , problem"; // rejected promise //Promise {<rejected>: 'Oh no , problem'}
//   return "LA LA LA LA"; //Promise {<fulfilled>: 'LA LA LA LA'}
// };

// sing3()
//   .then((data) => {
//     console.log("Promise resolved! ", data);
//   })
//   .catch((err) => {
//     console.log("Error occurs", err);
//   });

//4
// const login = async (username, password) => {
//   if (!username || !password) throw "Missing credentials";

//   //   if (password === "asda") return "Welcome!";  // error pass doesnt match
//   if (password === "hello") return "Welcome!"; // success - password match
//   throw "Invalid password";
// };

// login("asdadada", "hello")
//   .then((msg) => {
//     console.log("Logged in");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

//await keyword
