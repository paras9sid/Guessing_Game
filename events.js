const btn = document.querySelector("#btn");
btn.onclick = function () {
  console.log("button 2 clicked");
  console.log("working");
};

function scream() {
  console.log("aww");
  console.log("dont touch");
}

btn.onmouseenter = scream; // will print above 2 console stmt as mouse cursor touch button

document.querySelector("h1").onclick = () => {
  alert("h1 clicked!");
};
