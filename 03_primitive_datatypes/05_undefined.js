////  undefined
// Absence of a Meaningful Value: It indicates that a variable has been declared but not yet assigned a value, or that a property or object doesn't exist.
// Default for Missing Values: When you try to access a property that doesn't exist or a function doesn't return a value explicitly, you'll get undefined.

// Key Characteristics:
// Primitive Data Type: It's one of the seven primitive data types in JavaScript, alongside numbers, strings, booleans, null, symbols, and bigints.
// Unique Value: There's only one undefined value in JavaScript.
// Falsy: It's considered falsy in conditional statements.
// Typeof Returns "undefined":: typeof undefined returns "undefined".


// examples

let info ;
let data = undefined

console.log(info); // undefined
console.log(data); // undefined



//// Common Scenarios Where You'll Encounter Undefined:

// 01: Uninitialized Variables:
let myVariable; // Declared but not assigned, its value is undefined



// 02: Missing Function Arguments:
JavaScript
function greet(name) {
   return "Hello, " + name
}
greet(); // name will be undefined inside the function


// 03: Missing Object Properties:
let myObject = {};
console.log(myObject.nonExistentProperty); // Outputs undefined


//04:  Function's Implicit Return:
JavaScript
function noReturn() {
    // No explicit return statement
}
let result = noReturn(); // result will be undefined


// 05:  Deleted Properties:
let myObject2 = { property: "value" };
delete myObject2.property;
console.log(myObject2.property); // Outputs undefined




////   Handling Undefined:

// Check for Undefined: Use === or typeof to check if a value is undefined before using it.
// Assign Default Values: Provide default values using the logical OR operator (||) or ternary conditionals.
// Handle Potential Errors: Use try...catch blocks for operations that might throw errors due to undefined values.