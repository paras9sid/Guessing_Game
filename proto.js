// String.prototype.yell = function () {
//   //   console.log(this.toLocaleUpperCase());
//   return `OMG!!! ${this.toLocaleUpperCase()}!!!!! AHHH`;
// };

// Array.prototype.pop = function () {
//   return `Sorry will not pop now! method overriden`;
// };

//oops
// const navColor = new Color("carrot", [230, 126, 34]);
// const logoColor = new Color("emarald", [46, 204, 113]);

//classes
class Color {
  constructor(r, g, b, name) {
    //this keyword
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    // console.log("inside constructor");
    // console.log(r, g, b);
  }
  greet() {
    return `hello from color --> ${this.name}!`;
  }
}

const c1 = new Color(255, 67, 89, "tomato");
