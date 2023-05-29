//making new request
// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("Loaded");
//   //   console.log(this.responseText);
//   const data = JSON.parse(this.responseText);
//   console.log("full data below : Json", data); // full json object details
//   console.log("some details: ", data.name, data.height); // Luke Skywalker 172
// };

// req.onerror = function (e) {
//   console.log("Error", e);
// };

// req.open("GET", "https://swapi.dev/api/people/1");

// req.send();

//fetch req js

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("Resolved!", res);
//     // res.json().then((data) => console.log("JSON done", data));
//     //refractoring above line
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done", data); // data is parsed
//   })
//   .catch((err) => {
//     console.log("error ", err);
//   });

//2
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done", data); // data is parsed
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("Second req resolved ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("second", data);
//   })
//   .catch((err) => {
//     console.log("error ", err);
//   });

//refactoring using async

const loadStar = async () => {
  try {
    // //1st req
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);

    // //1st req - error one
    // const res = await fetch("https://swapi.dev/api/pedsadasdadople/1");
    // const data = await res.json();
    // console.log(data);

    //2nd req
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
};

loadStar();
