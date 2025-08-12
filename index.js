//this is my first javascript code:
// console.log("Hellow world!");

let name = "Mosh";
console.log(name);
//cannot be a reserved keyword
//should be meaningful
//cannot start with a nmber (1name)
//cannot contain space or hyphen (-)
//Are case-sensitive

// Variabless...
let firstName = "Mosh";
let lastName = "Hamedani";
console.log(firstName);
console.log(lastName);

//constant....
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
const interestRate = 0.3;
// interestRate = 1;..no repeatation in constant
console.log(interestRate);

//primitives types.....
let Name = "Mosh"; //string literal
let age = 30; //number literal
let isApproved = true; //Boolean literal
let selectedColor = null;
let Firstname = undefined;

//Dynamic code will be changed
//Static code will not be changed

//Reference type.......
///objects,array,functions

// 1:obects.....
let person = {
  name: "Mosh",
  age: 30,
};
//dot notation...it is easier and clean
person.name = "john";
//bracket notation
person["name"] = "mary";
console.log(person.name);

// 2:Arrays...
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors.length);

// 3:functions...
//performing a task//
function greet(name, lastName) {
  console.log("hello" + name + " " + lastName);
}
greet("john", "smith");
//calculation value
function square(number) {
  return number * number;
}
console.log(square(2));

//operators///
// 1: Airthematic operators:
// let x = 10;
// let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
//increment operators...
// console.log(++x);
// //decrement operator..
// console.log(--x);

// 2: assignment operators:
// let x = 10;
// x = x + 5;
//also we write in this way both method are same:
// x += 5;

// 3:comparison operators...
let x = 1;
// relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);
// equality
console.log(x === 1);
console.log(x !== 1);

// 4: equality operators...
//strict equality (type+value)
console.log(1 === 1);
console.log("1" === 1);
//lose equality..
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// 5: ternary and conditional...
// if a customer has more than 100 points
//they are a "gold" customer, otherwise,
//they are a "silver" customer.
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// 6:logival operators
//logical AND(&&)
//return true if both operands are true
console.log(true && true);
//logical OR (||)
let highIncome = false;
let goodCreditscore = false;
let eligibleForLoan = highIncome || goodCreditscore;
console.log("Eligible", eligibleForLoan);
//logical NOT(!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// 7:logical operators with non-Booleans:
//falsy(false)
//undefined
//null
//0
//false
//""
//NaN

let usercolor = "red";
let defaltcolor = "blue";
let currentcolor = usercolor || defaltcolor;
console.log(currentcolor);

////CONTROL FLOW///

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
let number = max(5, 3);
console.log(number);
function max(a, b) {
  return a > b ? a : b;
}
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
