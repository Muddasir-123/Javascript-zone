//01: .split(separator): Splits a string into an array of substrings based on a specified separator.
//02:  trim(): Removes whitespace from the beginning and end of a string.
//03:  replace(oldValue, newValue): Replaces occurrences of a substring with a new substring.


const quote = "  Thoughts become things   "
console.log(quote)


//// *** split
console.log(quote.split(" "))// we have separate quotes by spaces : return array of strings


//// *** trim
console.log(quote.trim())  // : remove all white spaces from left and right


//// *** replace
console.log(quote.replace("things","reality" )) // thoughts become reality


