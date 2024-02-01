// 01 : function with single paramter and argument
let cat = (sound) =>{
    return `The cat says ${sound}` // using paramter here
}
console.log(cat("Meow")) // passing argument word "Meow"

// note : the word sound on line 2 is paramter and the word "Meow" on line 5 is called argument
// if we pass argument word "bow" it will retun : "The cat says bow"


//02:  Arrow function with two parameters and arguments
let doSum = (v1, v2) => {
    return v1 + v2
}
console.log(doSum(30,20))



// 03: function with default parameter
let info = (name , city = "karachi" ) => {
    return `${city} ${name}`
    }
    console.log(info("Abid"))
    
// Note : The last parameter should have a default value



    
    