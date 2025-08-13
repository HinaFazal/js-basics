//FUNCTIONS...
//function declaration..
function walk() {
  console.log("walk");
}
//anonyms function expression..
const run = function () {
  console.log("run");
};
// let move = run;
// run();
// move();

//arguments..
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10));

// the rest operators..
function sums(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30, 1));

//default parameters..
function interest(principal, rate = 3.5, year = 5) {
  return ((principal * rate) / 100) * year;
}
console.log(interest(10000, undefined, 5));

//getter and setter..
// const member = {
//   firstName: "mosh",
//   lastName: "hamedani",
//   get fullName() {
//     return `${member.firstName} ${member.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split("");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// member.fullName = "john smith";
// console.log(member);

//error handling..
const member = {
  firstName: "mosh",
  lastName: "hamedani",
  get fullName() {
    return `${member.firstName} ${member.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new error("value is not a string.");
    const parts = value.split("");
    if (parts.length !== 2) throw new error("enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  member.fullName = "";
} catch (e) {
  alert(e);
}
console.log(member);

//local vrs globe scope..
const colour = "red";
function start() {
  const message = "hi";
  const color = "blue";
  console.log(color);
}
function stop() {
  const message = "bye";
}
start();

//method-> obj
//function-> global (window,global)
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showtag() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
video.showtag();

//exercise..1
console.log(sum(1, 2, 3, 4));
function sum(...items) {
  if (items.length === 1 && array.isarray(item[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

// exercise 2.
const Circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(Circle.area);

//exercise 3..
