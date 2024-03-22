/// What is Destructuring  ?

// Destructuring is a feature in many programming languages, 
// including JavaScript, that allows you to extract values from arrays, 
// objects, or other data structures and assign them to variables in a
//  more concise and convenient way.




// Array destructuring in JavaScript allows you to extract values from arrays 
// and assign them to variables in a concise and readable way.
//  It's a handy feature for quickly accessing and working with array elements.


//// *********    Example -1   **********  

// createing array
let color = ['red', 'green', 'blue', 'orange', 'black'];
// printing array values
console.log(color[0]);  // red
console.log(color[1]);  // green
console.log(color[2]);  // blue
console.log(color[3]);  // orange
console.log(color[4]);  // black


// Destructuring Array
let [c1, c2, c3, c4, c5, c6] = color;
// print values
console.log(c1);  // red
console.log(c2); // green
console.log(c3); // blue
console.log(c4); // orange
console.log(c5); // black
console.log(c6); // undefined (because no value in the array)




///// ------------------------------------------------------------

 /////  *********      Example - 2        ********
  //  Destructure Nested Array 

  let food = ['apple', 'banana', 'orange','peach', ['potato', 'tomato','onion']];

  console.log(food)
  console.log(food[2])// orange
  console.log(food[4][1]) // tomato

  // Destructuring
  let [f1,f2, f3, f4, [v1, v2, v3]] = food;
  console.log(v1)// potato
  console.log(f4) // peach



  //// *******    Example -3   **   with rest operator   ***********


  // Destructuring With rest / Spread Operators
  let [food1, food2, food3, food4, [...rest]] = food;
  console.log(food1) // apple
  console.log(rest) // return whole array of vergetables

  // Note rest operator always return array when there is more than one arguments




  //// *******       Example -4    (Array as function parameters and Arguments)
  
  function data([name, age, city]) {
   console.log(name);
   console.log(age);
   console.log(city)
  }

  data(["Abid", 23, "Karachi"]) 



  ////________      Destructuring 
  function user (){
    return ["Pakistan", "Turkeye", "Indonesia"]
  }

   let [cc1, cc2, cc3] =  user(); // assigning into variables
   console.log(cc1); // Pakistan
   console.log(cc2); // Turkeye
   console.log(cc3); // Indonesia









//// node _06_array_destructure.js
