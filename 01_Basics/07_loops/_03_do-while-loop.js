//  Do while loop : Execute first then check condition
console.log("This is Do While loop")


// 01
let score = 0
do {
    console.log(`your score is : ${score}`)
    score = score + 1
} while (score < 10);





// 02 do while

let colors = ["brown", "orange", "green", "yellow", "black", "blue", "pink", "purple"];
let v = 0;

do {
  console.log(colors[v]);
  v++; // Update v correctly this time
} while ( colors[v] !== "blue");



//  node _01_basics/_05_loops/_03_do-while-loop.js