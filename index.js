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

// OBJECTS//
// object -oriented programming(OOP)
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isvisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw();

//factory fuunctions//
function createcircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createcircle(1);
console.log(circle1);

// constructer function//
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const Circle = new Circle();

//DYNAMIC NATURE OF OBJECTS
// const Circle = {
//   radius: 1,
// };
// //circle={}
// circle.color = "yellow";
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;

// console.log(circle);

//cloning OF AN OBJECT
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
// const another = {};
// for (let key in circle) another[key] = circle[key];
// const another = Object.assign({ color: "yellow" }, circle);
const another = { ...circle };
console.log(another);

//Template literals//(``)
const message = `this is my
'first' message`;
console.log(message);
const anothermessage = `Hi John,
Thank you for joining my mailing list.
regards;
mosh`;
console.log(anothermessage);

//date//
const now = new Date();
const date1 = new Date("may 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2017);

//exercise//
//street
//city
//zipcode
//showAddress(address)

// let address = {
//   street: "a",
//   city: "b",
//   zipcode: "c",
// };
// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }
// showAddress(address);

//exercise 2//

// let address = createAddress("a", "b", "c");
// console.log(address);
let address = new Address("a", "b", "c");
console.log(address);
//factory function
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
//exercise 3
//constructor function

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

// Arrays...
// Adding elements..
// const numbers = [3, 4];
// //end method
// numbers.push(5, 6);
// // console.log(numbers);
// //beginning..
// numbers.unshift(1, 2);
// // console.log(numbers);
// //middle..
// numbers.splice(2, 0, "a", "b");
// console.log(numbers);

//finding elements..

const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1));

//FINDING ELEMENTS OBJECT
// const courses = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
// ];
// const course = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(course);

//ARROW FUNCTION
const courses = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
];
const course = courses.find((course) => course.name === "a");

console.log(courses);

//Removing elements..
const number = [1, 2, 3, 4];
//end
const last = number.pop();
console.log(number);
console.log(last);
//beginning..
// const first = number.shift();
// console.log(first);
// //middle..
// number.splice(2, 2);
// console.log(number);

//combinning arrays..
// const first = [1, 2, 3, 4];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// console.log(combined);

//slice array..

const first = [1, 2, 3, 4];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4);
console.log(combined);
console.log(slice);

//iterating arrays..
// const numbering = [1, 2, 3];
// for (let numbering of number) console.log(numbering);

// number.forEach((numbering) => console.log(numbering));

//sorting arrays..
// const nmbers = [2, 3, 1];
// numbers.sort();
// console.log(nmbers);
// nmbers.reverse();
// console.log(nmbers);

//testing arrays..
// const counting = [1, -1, 2, 3];
// const atleastonePositive = counting.some(function (value) {
//   return value >= 0;
// });
// console.log(atleastonePositive);

//filtering an array..
// const nmbers = [1, -1, 2, 3];
// const filtered = nmbers.filter((n) => n >= 0);
// console.log(filtered);

//mapping an array..
// const nmbers = [1, -1, 2, 3];
// const items = nmbers.filter((n) => n >= 0).map((n) => ({ value: n }));

// console.log(items);

//exercise  1..
// const nmbers = arrayfromrange(-10, -4);
// console.log(nmbers);
// function arrayfromrange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// //exercise 2..
const nmber = [1, 2, 3, 4];
console.log(nmber.includes(1));
function includes(array, searchElements) {
  for (let elements of array) if (elements === searchElements) return true;
  return false;
}

