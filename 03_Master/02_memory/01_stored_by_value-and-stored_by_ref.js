// Store by value and Store by reference:

//// 01:  Store by Value:

//  When a variable is stored by value, the value itself is directly stored in the variable's memory space.
//  This primarily applies to primitive data types like numbers, strings, booleans, null, and undefined in many programming languages, including JavaScript.

// EXAMPLE :
let a = 10;
let b = a; // `b` stores the value of `a`

b = 20; // Modifying `b` doesn't affect `a`
console.log(a); // Output: 10
console.log(b); // Output: 20


// Here, b receives a copy of the value stored in a. 
// Any changes to b don't affect a because they operate on separate memory locations holding their individual values.




////// __________________________________________________________________________________________________________________//////



//// 02:  Store by Reference:

// When a variable is stored by reference, a reference or pointer to the memory location where the actual data is stored is stored in the variable.
// This is the case for complex data types like objects and arrays in JavaScript.

// EXAMPLE :
let obj1 = { value: 10 };
let obj2 = obj1; // `obj2` holds a reference to the same memory location as `obj1`

obj2.value = 20; // Modifying `obj2` also modifies `obj1` because they point to the same object
console.log(obj1.value); // Output: 20
console.log(obj2.value); // Output: 20


// Here, obj1 and obj2 both reference the same object in memory. 
// Modifying the object through one variable affects the other since they point to the same memory location.


///// ********** 

// Understanding whether variables are stored by value or by reference is crucial
// because it determines how changes made to variables affect other variables that might hold the same value or reference.