//// Global scope mean : A variable declared globally can be used everywhere in the code.
//// The outermost scope, accessible from anywhere in your code.
//// Variables declared outside of any function are global.

var color = "green"; // declared a color variable globally

console.log(color) // green 


// access variable inside a fucnction 
function favColor() {
    return color
}
console.log(favColor() )// calling function : this function will retuen color "green"


//// Note : we will learn functions in upcoming steps
