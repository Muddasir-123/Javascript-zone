// Anonymous functions are functions that are defined without a name. 
// They are often used in JavaScript as callback functions or as arguments to other functions. 
// Here's an example of an anonymous function:

// Anonymous functions can also be used directly as callback functions:

var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(function(num) {
  return num * num;
});
