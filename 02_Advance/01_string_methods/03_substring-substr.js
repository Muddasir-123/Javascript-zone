// substring(start, end): Similar to slice, but with different end-index behavior.
// substr(start, length): Extracts a substring of a specified length starting at a specified index.


heading = "The black hole"

//// : substring() method
console.log(heading.substring(1,12)) // he black ho : operation stops one index before

//// :  substr(start, length): 
console.log(heading.substr(1,12)) // he black hol: operation stops on index defined

