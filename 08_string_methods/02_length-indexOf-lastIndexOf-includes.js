// length: Returns the length of a string (number of characters).
// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a substring, or -1 if not found.
// lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a substring, or -1 if not found.
// includes(searchValue): Returns true if a substring is found within the string, false otherwise.


let title = "Deep learning"



//// *** length method
console.log(title.length) // 13  : include white spaces



//// *** indexOf  methods :
console.log(title.indexOf("D")) // 0
console.log(title.indexOf("Deep")) // 0
console.log(title.indexOf("d")) // -1 : if character not found
console.log(title.indexOf("r")) // 88
console.log(title.indexOf("e")) // 1 : will return the index of first e found in the string


//// *** lastIndexOf  method
console.log(title.lastIndexOf("e")) // 6: will return the index of last e found in the string
console.log(title.lastIndexOf("v")) // -1 : if character not found 



/// **** includes  method

console.log(title.includes(2))  // false
// pass a string character or word

console.log(title.includes("learning")) // true
console.log(title.includes("learn")) // true
console.log(title.includes("g")) // true

console.log(title.includes("d")) // false
console.log(title.includes("D")) // true
console.log(title.includes("ee")) // true
console.log(title.includes("eee")) // false : because there are double ee not triple in Deep






