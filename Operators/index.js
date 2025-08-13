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
