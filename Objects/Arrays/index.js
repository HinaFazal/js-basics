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
