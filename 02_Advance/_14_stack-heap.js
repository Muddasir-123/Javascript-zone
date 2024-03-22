// Memory Allocation : (Stack) and (Heap)

// 01 : Stack:
// => Primitive Data Types
// => Get copy of the value
// => by modifing Original values will remain unchanged

// 02: Heap
// => Non Primitive Data Types
// => Get Referenve of value :
// => by modifing Original values will be changed

console.log(111)

// 01: Stack example
let myName = "Abid Khokhar";
let myFullName = myName;

console.log(myName); // Abid Khokhar
console.log(myFullName); // Abid Khokhar

// modify
myFullName = "Abid kk";

// original remain same
console.log(myName); //Abid Khokhar

console.log(myFullName); // Abid kk





// 02 : Heap
let myData = {
    name:"Abid Khokhar",
    age:23,
    city:"Karachi"
}

console.log(myData) // original data

let yourData = myData;
console.log(yourData); // 

// modify copy
yourData = myData.city = "Lahore";

console.log(myData) // city is modified in Original Object