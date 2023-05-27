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

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    setTimeout(() => {
      if (delay > 4000) {
        failure("Connection Timeout :(");
      } else {
        success(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCallback(
  "books.com/page1",
  (response) => {
    console.log("worked!", response);
    fakeRequestCallback(
      "books.com/page2",
      (response) => {
        console.log("worked! again - 2req", response);
        fakeRequestCallback(
          "books.com/page3",
          (response) => {
            console.log("worked! -- req 3", response);
          },
          (err) => {
            console.log("error!!!3", err);
          }
        );
      },
      (err) => {
        console.log("error!!!2", err);
      }
    );
  },
  (err) => {
    console.log("error!!!1", err);
  }
);
