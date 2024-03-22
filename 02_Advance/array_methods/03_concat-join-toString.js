let p = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"]
let s = ["one", "two", "three", "four", "five", "six", "seven"]
console.log(p)


//// .concat()  method : merge two or more arrays and return a sinle array

let combo = p.concat(s) // merge array + array
let combo2 = p.concat("hello") // merge array + string
let combo3 = p.concat(s,"Hello world!") // merge array + array + string  (both)

console.log(combo)
console.log(combo2)
console.log(combo3)

console.log("___________________________________________________________")

//// *** .join() : return a string coma separated : convert array to string type and join single array and multiple arrays
let join1 = p.join(s) // join miltiple arrays
console.log(join1) // ...,...,...,.. coma seperated values
console.log(typeof join1) // string
console.log(s.join())// join single array

console.log("___________________________________________________________")


/////  *** .toString() : return a string : convert arrray to string : it only converts single array
console.log(p.toString()) // convert array to string 
console.log(p,s.toString()) // ? which array wiil be converted to string "p" or "s" or both : only "s" will be converted


console.log("__________________________________________________________ ")

//// *** .localeString() : similar to .toString() method
console.log(p.toLocaleString())