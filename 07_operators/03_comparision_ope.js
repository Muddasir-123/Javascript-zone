// Comparison  operators are used to test or compare conditions returns true or false.


let x = 10
let y = 20

// 01: eaual to ( == )
console.log(x == y) // false
console.log(x === y ) // false : also check data type



// 02: not equal to ( !== )
console.log(x != y) // true
console.log(x !== y) // true : check data type also 



// 03: Greater than
console.log(x > y) // false



// 04: Less than 
console.log(x < y ) // true



// 05: Greater than and equal to
console.log(x >= y) // false



// 06: Less then and equal to 
console.log(x <= y) // true




//// *****     Note also compare other data types

let name1 = "Abid"
let name2 = "abid"
let name3 = "Abid"

console.log(name1 == name2) // false  because js is case sensitive
console.log(name == name3) // true