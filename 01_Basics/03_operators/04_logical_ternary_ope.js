// 01 AND Operator ( && ) : all conditions should be correct to get result in true
console.log(x1 > 100 && x1 < 200) // false
console.log(x1 > 100 && x1 < 300) // true



// 02: OR Operator ( || ) : any one condition should be correct to get result in true
console.log(x1 > 200 || x1 > 100) // true
console.log(x1 > 200 || x1 > 250) // false



// 03: NOT Operator ( ! ) 
console.log( x1 < x2) // true
console.log(!(x1 < x2)) // false with not operator





// //   Conditional (Ternary) Operator
// // JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

let age = 15
let voteable = (age < 18) ? "can't vote":"can vote";
console.log(voteable)

