
//// Key Differences:
// Return Value: Prefix returns the updated value, postfix returns the original value.
// Order of Operations: Prefix increments/decrements before evaluating the expression, postfix does it after.

////  When to Use Each:
// Prefix: When you immediately need the updated value in a subsequent calculation.
// Postfix: When you need to use the original value before updating it.

// there are two operators : ( ++ ) and ( -- ) 

// 01 prefix operator
let p = 10
p++
console.log(p) // 11


// 02: postfix operator
let s = 20
++s
console.log(s) // 21

// here no difference between prefix operator and postfix operator

// see below examples for difference :

// postfix operator
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"





// prefix operatro
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
