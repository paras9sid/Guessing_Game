let maximum = parseInt(prompt("Welcome! Enter your max number..."));

while (!maximum) {
  maximum = parseInt(prompt("Enter valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit.)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high!Enter a new guess..."));
    attempts++;
  } else if (guess < targetNum) {
    guess = parseInt(prompt("Too low! Enter a new guess..."));
    attempts++;
  } else {
    guess = prompt("Invalid Guess, please enter a number or 'q' to quit");
    console.log("");
  }
}

if (guess === "q") {
  console.log("Ok , You quit!!");
} else {
  console.log("Congrats, you win!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
