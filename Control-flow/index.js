///CONTROL FLOW///

// 1: CONDITIONAL STATEMENT:(if..else)
//Hour
//if hour is between 6am and 12pm:Good Morning
//if it is between 12pm and 6pm: Good Afternoon
//otherwise: Good evening!
let hour = 20;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
// 2:Switch case...
let role = "guest";
switch (role) {
  case "guest":
    console.log("guest user");
    break;
  case "moderator":
    console.log("moderator user");
    break;

  default:
    console.log("unknown user");
}
//another example of if else...
if (role === "guest") console.log("guest user");
else if (role === "moderator") console.log("moderator user");
else console.log("unknown user");
///LOOPS///
//for loops
for (let i = 0; i < 5; i++) {
  console.log("hello world", i);
}
//while loops
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//do while loop
// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

//infinite loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//for-in loops
const man = {
  name: "mosh",
  age: 30,
};
for (let key in man) console.log(key, person[key]);

//for-of loop
const color = ["red", "blue", "green"];
for (let colors of color) console.log(color);

//Exercise   1..
// let number = max(5, 3);
// console.log(number);
// function max(a, b) {
//   return a > b ? a : b;
// }
//exercise 2..
console.log(islandscape(300, 600));
function islandscape(width, height) {
  return width > height;
}
///exercise 3
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "not a number";
  if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
