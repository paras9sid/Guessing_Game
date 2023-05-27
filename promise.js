//callback function
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500 + 500);
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

//converted above callback function -> into Promises
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

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
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("It worked!!  (1)");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("It worked!!  (2)");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("It worked!!  (3)");
          })
          .catch(() => {
            console.log("Error!!! (3)");
          });
      })
      .catch(() => {
        console.log("Error!!! (2)");
      });
  })
  .catch(() => {
    console.log("Error!!!  (1)");
  });
