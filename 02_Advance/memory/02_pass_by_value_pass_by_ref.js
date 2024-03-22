// In JavaScript, primitive types like numbers, strings, booleans, null, and undefined are passed by value,
//  while objects (including arrays, functions, and other objects) are passed by reference.


//// 01:  Pass by Value:
// When a variable of a primitive type is passed as an argument to a function or assigned to another variable, 
// a copy of the value is created. Any changes made to the copied value don't affect the original variable.


// EXAMPLE :
let a = 5;
let b = a; // b gets the value of a (5)

b = 10; // Changing b doesn't affect a
console.log(a); // Output: 5
console.log(b); // Output: 10



////// __________________________________________________________________________________________________________________//////





//// 02: Pass by Reference:

//  When an object is assigned to a variable or passed as an argument,
//  it's not the object itself that gets copied but its reference/address in memory.
//  Hence, changes made to the object through one reference will affect all references pointing to that object.

let obj1 = { value: 10 };
let obj2 = obj1; // obj2 refers to the same object as obj1

obj2.value = 20; // Changing obj2's object value
console.log(obj1.value); // Output: 20 (obj1's object is also modified)
console.log(obj2.value); // Output: 20





//  This distinction is important because it affects how data is handled and mutated in JavaScript.
//  When working with objects, changes to the object's properties will reflect across all references to that object.
//  When working with primitives, each variable maintains its own independent value.

// Understanding this behavior is crucial to avoid unexpected side effects when working with data in JavaScript.