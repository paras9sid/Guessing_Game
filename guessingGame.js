let maximum = parseInt(prompt("Welcome! Enter your max number..."));
while (!maximum) {
  maximum = parseInt(prompt("Enter valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high!Enter a new guess..."));
  } else {
    guess = parseInt(prompt("Too low! Enter a new guess..."));
  }
}

if (guess === "q") {
  console.log("Ok , You qyit!!");
} else {
  console.log("Congrats, you win!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
