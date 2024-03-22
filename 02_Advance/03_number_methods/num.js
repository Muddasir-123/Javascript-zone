let num1 = 100255;
let num2 = 2030.433445
let num3 = "345.3042"
let num4 = "hello"
//01:  toString : convert Number to String
let n1 = num1.toString()
console.log(typeof n1) // string


//02: toPrecision(): Formats a number to a specified length.
console.log(num2.toPrecision(4)) // 2030


//03:  toFixed(): Converts a number into a string, rounding the number to a specified number of decimals.
console.log(num2.toFixed(2)) // 2030.4334
console.log(num2.toFixed(4))


//04: parseInt(): Parses a string and returns an integer.
//05: parseFloat(): Parses a string and returns a floating-point number.
let n3 = parseInt(num3) // 345
let n33 = parseFloat(num3) // 345.3042

console.log(typeof n3) // number
console.log(typeof(n33)) // number



//06: isNaN(): Checks whether a value is NaN (Not-a-Number).
console.log(isNaN(num3)) // false
console.log(isNaN(num1)) // true
console.log(isNaN(num4)) // true 


// 07: isFinite(): Checks whether a value is a finite number.
console.log(isFinite(1231)) // true
console.log(isFinite(1231.2222)) // true
console.log(isFinite("12312.123")) // true
console.log(isFinite("Hello, world!")) // false


// 08: Math.max(): Returns the largest of zero or more numbers.
console.log(Math.max(200,600,300,400,500,200)) //600


// 09: Math.min(): Returns the smallest of zero or more numbers.
console.log(Math.min(200,600,300,400,500,200)) // 200



// 10: Math.round(): Rounds a number to the nearest integer ( remove decimal values).

console.log(Math.round(1002.3223)) // 1002
console.log(Math.round(3040.2)) // 3040
