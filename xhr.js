//making new request
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Loaded");
  //   console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log("full data below : Json", data); // full json object details
  console.log("some details: ", data.name, data.height); // Luke Skywalker 172
};

req.onerror = function (e) {
  console.log("Error", e);
};

req.open("GET", "https://swapi.dev/api/people/1");

req.send();
