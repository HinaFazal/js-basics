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
