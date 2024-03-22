//  -- What is closure
// Closure allows you to access data outside the scope
// parents can access child's data with lexical scope
console.log("Closure");


// Example -1
function outer() {
  let message = "This is outer function";

  function inner() {
    console.log(message);
  }
  return inner; // returning a whole function definition
}
let myfun = outer();
myfun();





//  Example - 2
function house() {

  function room1() {
    console.log("This is the room 1");
  }
  return room1; // it gets the lexical scope
  
}
house();
let myhouse = house();
myhouse();



// Note : when you return any function : The whole function with its lexical scope will be return







//// node _11_closure.js
