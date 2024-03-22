// 01 spread operator with array

let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70, 80];
let arr3 = [...arr1, ...arr2]; // concating arr1 and arr2
console.log(arr3);

// 02 spread operator with objects
// merging

let obj1 = { name: "Abid", age: 23 };
let obj2 = { city: "Karachi", status: true };
let obj3 = { ...obj1, ...obj2 }; // merge

console.log(obj3);

// 03 spread operator in a function
let array1 = [2, 3, 4, 5];
let data = (...rest) => {
  console.log(...rest);
};

data("Passing array as an argument", ...array1); // array as argument as spread operator





////_____________________________________________________________________________________

// Difference between Rest and Spread Operator in Js

//   In summary,
//   the rest operator is used to collect multiple function arguments into an array,
//   while the spread operator is used to spread the elements of an array or 
//   the properties of an object into another array or object, making it easier to 
//   work with collections and data structures in JavaScript.

//// ____________________________________________________________________________________

// node _04_spread_ope.js
