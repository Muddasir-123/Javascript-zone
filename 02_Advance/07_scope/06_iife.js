// Imediately Invoke Function Expression

(function call(){
    console.log("Hello, I am IIFE 1")
})(); // this semicolon is most important , else show error and will not call next IIFE 


// EEFI with arrow function
(()=>{console.log("Hello, I am IIFE 2 in arrow function")})()

