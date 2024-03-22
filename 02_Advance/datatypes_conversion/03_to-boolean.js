//// 01: *** string to boolean
let b1 = "hello"
b1 = Boolean(b1) // convert to boolean
console.log(typeof b1) // boolean
console.log(b1) // true


//// 02: number to boolean
let b2 = 200
let b3 = 33.44
let b4 = 0
// coverting
b2 = Boolean(b2) // convert to boolean
b3 = Boolean(b3) // convert to boolean
b4 = Boolean(b4) // convert to boolean

console.log( typeof b2, typeof b3, typeof b4) // boolean, boolean
console.log(b2) // true
console.log(b3) // true
console.log(b4) // false




///// *** null to string
let b5 = null;
b5 = Boolean(b5) // convert to boolean
console.log(typeof b5) // boolean
console.log(b5) // false



//// *** undefined to string
let b6 = undefined

b6 = Boolean(b6) // convert to boolean
console.log(typeof b6) // boolean
console.log(b6) // false



//// *** empty string to boolean
let b7 = ""
b7 = Boolean(b7) // convert to boolean
console.log(typeof b7)
console.log(b7)



///// *****  SUMMARY *****

// string => boolean = true
// empty string => boolean = false
// number => boolean = true
// number 0 => boolean = false
// null => boolean = false
// undefined => boolean = false

/// note : empty string without space will return false but with space will return true




