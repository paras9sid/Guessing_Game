// //callback function
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500 + 500);
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };

// //converted above callback function -> into Promises
// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500 + 500);
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout :(");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

//callbackhell situation
// fakeRequestCallback(
//   "books.com/page1",
//   (response) => {
//     console.log("worked!", response);
//     fakeRequestCallback(
//       "books.com/page2",
//       (response) => {
//         console.log("worked! again - 2req", response);
//         fakeRequestCallback(
//           "books.com/page3",
//           (response) => {
//             console.log("worked! -- req 3", response);
//           },
//           (err) => {
//             console.log("error!!!3", err);
//           }
//         );
//       },
//       (err) => {
//         console.log("error!!!2", err);
//       }
//     );
//   },
//   (err) => {
//     console.log("error!!!1", err);
//   }
// );

//above callback hell into promises conversion
// const request = fakeRequestPromise("yelp.com/api/coffee");
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("It worked!!  (1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked!!  (2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("It worked!!  (3)");
//           })
//           .catch(() => {
//             console.log("Error!!! (3)");
//           });
//       })
//       .catch(() => {
//         console.log("Error!!! (2)");
//       });
//   })
//   .catch(() => {
//     console.log("Error!!!  (1)");
//   });

//above promise converted to short one with single catch
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("It worked!!  (1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("It worked!!  (2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("It worked!!  (3)");
//     console.log(data);
//   })
//   // single catch for all above promises
//   .catch((err) => {
//     console.log("Oh no , req falied!!!");
//     console.log(err);
//   });

//creating own promise

// new Promise((resolve, reject) => {
//   //   resolve();
// });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.5) {
//         resolve("fake data here");
//       }
//       reject("req error");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("Done with request!!", data);
//   })
//   .catch((err) => {
//     console.log("oh no!!!", err);
//   });

//rainbow calback funtion with promises
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("violet", 1000));
