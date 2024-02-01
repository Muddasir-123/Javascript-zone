console.log("SYMBOL AS OBJECT KEY")

// declaring symbol
let mySymbol = Symbol("k1");
let mySymbol1 = Symbol("k2")
// object
let data = {
    name:"Abid",
    age:23,
    mySymbol : "A@", // worng way to use symbol as key  : will return undefined OR  will work but datatype will remain string not symbol 
    [mySymbol1] : "**A**"
}


// printing values

console.log(data[mySymbol]) // undefined 
console.log(data[mySymbol1]) // **A**


// check datatype
console.log(typeof(mySymbol)) //  symbol
console.log(typeof(mySymbol1)) // symbol 




// node 02_symbol_in_obj.js