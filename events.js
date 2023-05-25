// const btn = document.querySelector("#btn");
// btn.onclick = function () {
//   console.log("button 2 clicked");
//   console.log("working");
// };

// function scream() {
//   console.log("aww");
//   console.log("dont touch");
// }

// btn.onmouseenter = scream; // will print above 2 console stmt as mouse cursor touch button

// document.querySelector("h1").onclick = () => {
//   alert("h1 clicked!");
// };

//addEventListener

// const button = document.querySelector("#btn");

// 1
// button.addEventListener("click", () => {
//   alert("button 2 clicked with listener");
// });

// //2
// button.addEventListener("mouseup", () => {
//   alert("CLICKED MOUSEUP");
// });

// function twist() {
//   console.log("Twist");
// }
// function shout() {
//   console.log("Shout");
// }
//cant call these above two funtions on one click via onclick method
// button.onclick = twist
// button.onclick = shout;

//addEventListerner can solve this problem

// button.addEventListener("click", twist);
// button.addEventListener("click", shout);

//3
// button.addEventListener("click", twist, { once: true }); //Twist will print only once
// button.addEventListener("click", shout);

//random color changer
// const button = document.querySelector("button");
// const h2 = document.querySelector("h2");

// button.addEventListener("click", () => {
//   console.log("clicked");
//body coor change upon button click
//   document.body.style.backgroundColor = "olive";

//   const newColor = randomColor();
//   document.body.style.backgroundColor = newColor;
//   h2.innerText = newColor;
// });

// const randomColor = () => {
//   //random bg colors genration
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };

// // button events - this keyword //2

// const buttons = document.querySelectorAll("button");
// for (let button of buttons) {
//   // button.addEventListener("click", () => {
//   //   // console.log("CLICKED!");
//   //   //change color after clicking random button on web page
//   //   button.style.backgroundColor = randomColor(); //change color of button background
//   //   button.style.color = randomColor(); // change color of text inside buytton
//   // });
//   button.addEventListener("click", colorize); // this keyword
// }

// const h1s = document.querySelectorAll("h1");
// for (let h1 of h1s) {
//   // h1.addEventListener("click", () => {
//   //   h1.style.backgroundColor = randomColor(); // change coloe of h1 div background
//   //   h1.style.color = randomColor(); //change color of text h1
//   // });
//   h1.addEventListener("click", colorize); // this keyword
// }

// // /this keyword help
// function colorize() {
//   this.style.backgroundColor = randomColor();
//   this.style.color = randomColor();
// }

// keyboard events
// const btn = document.querySelector("button");
// btn.addEventListener("click", (event) => {
//   console.log(event);
//   // alert("click");
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("Keydown");
// });

// input.addEventListener("keyup", (e) => {
//   // console.log(e);
//   console.log(e.key);
//   console.log(e.code);
// });

// window.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("UP!");
//       break;
//     case "ArrowDown":
//       console.log("down");
//       break;
//     case "ArrowLeft":
//       console.log("left");
//       break;
//     case "ArrowRight":
//       console.log("right");
//       break;
//     default:
//       console.log("IGNORED!");
//   }
// });

//form events
// const form = document.querySelector("#shelterForm");
// form.addEventListener("submit", (e) => {
//   // console.log("Submitted!");

//   //preventing default behaviour
//   e.preventDefault();
//   console.log("Submitted!");
// });

//2

// const form = document.querySelector("#shelterForm");
// //extracting data out of input
// const input = document.querySelector("#catName");
// //list calling
// const list = document.querySelector("#cats");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //stopping from going to new url in form action
//   // console.log("Submitted!");
//   // console.log(input.value);

//   //adding values in list below
//   const catName = input.value;
//   const newLi = document.createElement("LI");
//   newLi.innerText = catName; // input value as text i newLis element created li
//   // console.log(newLi);
//   list.append(newLi); // will insert value of input in li below
//   // input.value = ""; //value as empty strng after submission- old value in input box gone
//   //
//   form.reset();
//   console.log(`${catName} not available`);
// });

// const form = document.querySelector("form");

// const quan = document.querySelector("#qty");
// const product = document.querySelector("#product");

// const list = document.querySelector("#list");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("fome submit check"); // ok

//   const pro = product.value;
//   const qy = quan.value;
//   console.log(pro, qy);

//   const newLi = document.createElement("li");
//   newLi.innerText = `${qy} ${pro}`;

//   list.append(newLi);

//   form.reset();
// });

// //
// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");
// //change event
// // input.addEventListener("change", (e) => {
// //   // console.log("Input Event");
// //   h1.innerText = input.value; // will not change value in change event
// //   // console.log(e);
// // });

// //input event
// input.addEventListener("input", (e) => {
//   // console.log("Input Event");
//   h1.innerText = input.value;
//   // console.log(e);
// });

//2
// const container = document.querySelector("#container");
// const button = document.querySelector("#changeColor");
// button.addEventListener("click", (e) => {
//   container.style.backgroundColor = makeRandomColor();
//   e.stopPropagation(); // will stop hide class effect and stop event bubbling
// });

// container.addEventListener("click", (e) => {
//   container.classList.toggle("hide");
// });

// const makeRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };

//tweet

//looping - event delegation method

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove(); // onlu removing default lis in html file ul list - ot removing new appended tweets
//   });
// }

//setup total for rendering vlaues in list
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
const username = document.querySelector("#username");
const tweet = document.querySelector("#tweet");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = username.value;
  const t = tweet.value;

  console.log(`${user} ${t}`);

  const newLi = document.createElement("li");
  newLi.innerText = `${user} ${t}`;

  tweetsContainer.append(newLi);
  tweetForm.reset();
});

tweetsContainer.addEventListener("click", (e) => {
  // console.log("click on ul"); //printing this on console after clicking on tweet lists
  // console.log(e); // to check the event fields required.

  //to remove newly added tweest upon clicking them
  // e.target.remove(); // removing all elements li and paragraph too

  // to avoid upper problem of removing only li's
  e.target.nodeName === "LI" && e.target.remove();
});
