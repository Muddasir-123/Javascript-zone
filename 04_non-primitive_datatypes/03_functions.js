// Blocks of reusable code that can be called to perform specific tasks.
// They can accept arguments and return values.


//// examples

// 01
function age(){
    console.log("I am 23 years old.")
}
age()




// 02 : function with return keyword
function name(){
    return "My name is Abid kk."
}
console.log(name())




// 03 : function with single perameter and argument keyword
function info(myage){
    return  `I am 23 years old and after 10 years I will be ${myage+10} years old.`
}
console.log(info(23))




// 04 : function with multiple peramters and arguments
function sum(val1, val2){
    return val1 * val2 
}
console.log(sum(10, 30)) // 300




// Note: We will learn more about functions in upcoming steps