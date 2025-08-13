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
