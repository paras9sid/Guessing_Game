// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 2000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 3000);

//nesting above functions - and timeout = 1000 => 1s - same result as above
//2
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//     }, 1000);
//   }, 1000);
// }, 1000);

//3 - nesting code compressed - next();
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};
//1
// delayedColorChange("olive", 2000);
// delayedColorChange("teal", 2000); // will sow teal only with same time duration

//2 - nesting callbacks - generic function
delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("green", 1000, () => {
      delayedColorChange("yellow", 1000, () => {
        delayedColorChange("blue", 1000, () => {});
      });
    });
  });
});
