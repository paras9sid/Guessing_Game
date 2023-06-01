String.prototype.yell = function () {
  //   console.log(this.toLocaleUpperCase());
  return `OMG!!! ${this.toLocaleUpperCase()}!!!!! AHHH`;
};

Array.prototype.pop = function () {
  return `Sorry will not pop now! method overriden`;
};
