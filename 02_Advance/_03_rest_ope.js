// Rest operator is used for multiple arguments

let evenNumber = (v1, v2, v3) =>{
    console.log(v1, v2, v3)
}
evenNumber(2,4,6,8)// you will see 8 is not being printed

// because we have 3 parameters and we are passing 4 arguments ,
//  we can only pass aruments as the number of parameters
// We use rest operator when dont know number of arguments



// example 1 ...rest operator
let oddNumber = (...rest) =>{
    console.log(...rest)
}
oddNumber(1,3,5,7,9,11,13,15,17) 
oddNumber(21,23,25,27,29,31)
// now you can see we can pass a number of arguments 






// node _03_rest_ope.js
