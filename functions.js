//writing funtions in javascript

// function singSong() {
//   console.log("Sidharth");
//   console.log("Jain");
//   console.log("is here.");
// }

// //calling function

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// /functions with arguments

// function greet(firstName) {
//   console.log(`Hey there: ${firstName}`);
// }

// function rant(message) {
//   console.log(message);
// }

// for (let m of message) {
//   console.log(m);
// }
// rant("I hate beets");

//messgae print 3 times on console with uppercase output when arg is in lowercase
// function rant(message) {
//   for (let i = 0; i < 3; i++) {
//     console.log(message.toUpperCase());
//   }
// }

// function with 2 args

function greet(firstName, lastName) {
  // console.log(`hey there! ${firstName} ${lastName}`);
  console.log(`hey there! ${firstName} ${lastName[0]}.`);
}

greet("Sid", "Jain");

//repeat function

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
