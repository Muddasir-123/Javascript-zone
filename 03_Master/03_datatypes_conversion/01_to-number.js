//// ***  01: string to number
let v1 = "hello"
v1 = Number(v1) // converting to number
console.log(typeof v1) // check datatype : type converted to number
console.log(v1) // check value : but value is NaN



//// ***  02: num string to number
let v2 = "123"
console.log(v2)
v2 = Number(v2) // converting to number
console.log(typeof v2) // number 
console.log(v2) // 123


//// *** 03: mix string to number
let v3 = "111abc"
v3 = Number(v3) // converting to number
console.log(typeof v3) // Number 
console.log(v3) // NaN 


//// *** 04: boolean to number
let v4 = true
let v5 = false

// converting to Number
v4 = Number(v4)
v5 = Number(v5)

console.log(typeof v4) // number 
console.log(typeof v5) // Number
console.log(v4) // 1
console.log(v5) // 0



//// *** 05:  null to number 

let v6 = null

v6 = Number(v6)
console.log(typeof v6) // number 
console.log(v6) // 0



//// *** 06:  undefined to number
v7 = undefined
v7 = Number(v7) // converting to number
console.log(typeof v7) // number 
console.log(v7) // NaN



/////  ********    SUMMARY   ******** 

// "1234" => number
// "abc" => NaN
// "123abc" => NaN
// true => 1 number
// false => 0 number
// null => 0 number 
// undefined => NaN


