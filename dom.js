//dom = document object model

//getElementById

//getelemetsByTagName
// const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//   //   console.log(img.src);
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

//all images with img tag name will be changed to url in img.src
//getElementsByClassName

// const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// //all images with class anme square changed to url in img.src

//query selector

// const links = document.querySelectorAll("p a");

// for (let link of links) {
//   console.log(link.href);
// }

// //
// const allLinks = document.querySelectorAll("a");
// for (let link of allLinks) {
//   link.innerText = "I AM A LINK";
// }

//appendChild method
// const newImage = document.createElement("img");

// newImage.src =
//   "data:image/jpeg;base64,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";

// document.body.appendChild(newImage);

// const newH3 = document.createElement("h3");
// newH3.innerText = "I am new H3.";

// document.body.appendChild(newH3);

// //append method
// const p = document.querySelector("p");

// // p.append("I am new text in p tag.");
// p.append("I am new text in p tag.", "next after comma.");

// const newB = document.createElement("b");

// newB.append("Hi!");

// //prepend method
// p.prepend(newB);

// //insert Adjacent elements
// const h2 = document.createElement("h2");

// h2.append("Are adorable chicks!");

// const h1 = document.querySelector("h1");

// h1.insertAdjacentElement("afterend", h2);

// const h3 = document.createElement("h3");

// h3.innerText = "i am h3.";

// h1.after(h3);

//removeChild
const firstLi = document.querySelector("li");

const ul = firstLi.parentElement;

ul.removeChild(firstLi);

const b = document.querySelector("b");

b.parentElement.removeChild(b);

//remove

const image = document.querySelector("img");
image.remove();
