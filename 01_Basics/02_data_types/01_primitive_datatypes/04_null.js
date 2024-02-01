//// null : 

// In JavaScript, null signifies the intentional absence of any object value.
// It's like a placeholder that says, "There's nothing here, intentionally."
// It's not the same as an empty string (""), zero (0), or empty arrays/objects (which still have a data structure).

//// Key Characteristics:
// Primitive Data Type: It's one of the seven primitive data types in JavaScript, alongside numbers, strings, booleans, undefined, symbols, and bigints.
// Unique Value: There's only one null value in JavaScript.
// Falsy: In conditional statements, null is considered falsy.
// Data Type of "Object" (Confusing Quirk): While conceptually representing the absence of an object, typeof null returns "object" due to a historical quirk in JavaScript.

//// Common Uses:
// Representing No Meaningful Value: Used to indicate that a variable has no meaningful value yet or that a function doesn't return a value.
// Clearing Object References: Setting a variable that previously held an object to null can help clear its reference and potentially free up memory.
// Signaling Missing Data: In data structures or APIs, null can be used to signal that certain data is absent or unavailable.


let temprature = null;
let value = null;
console.log(temprature) // null
