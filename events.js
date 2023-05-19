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
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  //   console.log("clicked");
  //body coor change upon button click
  //   document.body.style.backgroundColor = "olive";

  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const randomColor = () => {
  //random bg colors genration
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
