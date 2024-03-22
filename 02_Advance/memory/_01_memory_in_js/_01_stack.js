// use in primitive data types
//  copy of variables or data
// changes will be made in copy of original will be same


// lets have an example of stack 
let city1 = "Mirpurkhas";

let city2 = city1 // get copy of city1

city2 = "Lahore" // change made in  variable city2

// let see the values of both varaible now

console.log(city1) // Mirpurkhas 
console.log(city2) // Lahore

// Note nothing is changed in original variable this is called stack 