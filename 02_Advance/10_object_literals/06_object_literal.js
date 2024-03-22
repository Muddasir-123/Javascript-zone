//  Object literals are a convenient way to organize and   group related data and
//  functionality into a single entity,

// example -1
let obj1 = {
  name: "Abid",
  age: 23,
  city: "Karachi",
  status: true,
};
console.log(obj1);

//// ----------------------------------------------

// example-2
let name = "Asif";
let age = 32;

let obj2 = {
  name: name,
  age: age,
  city: "Islamabad",
  status: false,
};
console.log(obj2);

// you can see in obj-2 we are using name and age from variable
// we can do this without giving value when property and value are same

let obj3 = {
  name,
  age,
  city: "Quetta",
  status: true,
};
console.log(obj3); // you can see result is same as obj2

//// ---------------------------------------

// example -3
// variable as a property
let n = "name";

let obj4 = {
  [n]: "Imran",
  course: "Javascript",
};
console.log(obj4);
console.log(obj4.name); // Imran

//// ------------------------------------------------------

// example 4
// concat property
let obj5 = {
  ["student_" + n]: "Zahid Ali",
  course: "Typescript",
};
console.log(obj5);
console.log(obj5.name); //x name  undefinded
console.log(obj5.student_name); // Zahid Ali

//// ---------------------------------------------------------

// example 5
// Functio ( Method ) in object

// es5 function in object
let obj6 = {
  name: "Azhar",
  message: function () {
    return "Thoughts become Things";
  },
};

console.log(obj6.name); // Azhar
console.log(obj6.message); // will not work
console.log(obj6.message()); // correct way

// es6  function in object
let obj7 = {
  name: "Irfan",
  message() {
    return "Dream Big Work Hard";
  },
};
console.log(obj7.name);
console.log(obj7.message());

///// ---------------------------------------------------------

// example 6
/// this keyword
let obj8 = {
  name: "Asad",
  course: "Python Basics",
  detail() {
    return `${this.name} ${this.course}`;
  },
};
console.log(obj8.name); // Asad
console.log(obj8.course); // Python Basics
console.log(obj8.detail()); // Asad Python Basics

// 2nd way to call a function
console.log(obj8["detail"]()); // fine

///// -------------------------------------------------------------

// example 7
// function name in quote with space

let obj9 = {
  fname: "Faisal",
  lName: "Aziz",
  "full Name"() {
    return `${this.fname} ${this.lName}`;
  },
};
console.log(obj9["full Name"]()); // calling function

//// example 8
//// object in a function (return type object)

function data(name, course) {
  return { name, course };
}
console.log(data("Nasir", "Blockchain")); // returning an object

// get single value
let info = data("Nasir", "Blockchain"); // now info has become an object
console.log(info.course); // Blockchain
console.log(info.name); // Nasir

// node _05_object_literal.js
