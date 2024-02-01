//   Loops are also called  Iterators 
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Often this is the case when working with arrays:
// loop has 3 stahes :    initialization   ->     Conditions  ->      Execution 




//  example 01 
for (let i = 0; i < 5; i++) {
    console.log(i)    
}


console.log("______________________________________________________________")




//example 02
for (let i = 1; i <= 5; i++) {
    console.log("loop") 
    
}



console.log("______________________________________________________________")





// loop with break and continue statements

// example 03  with condition
// loop will print 1 to 10 
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is my favorite number")
    }
    console.log(i)
}
// you can se 5 is printing twice




console.log("______________________________________________________________")




// 04 : break statement : it will stop loop on 5
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is my favorite number")
        break
    }
    console.log(i)
}



console.log("______________________________________________________________")

// 05 : continue statement ; it will skip 5 and go ahead in the loop
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is my favorite number")
        continue
    }
    console.log(i)
}







console.log("_________________________ Loop with Arrays ______________________________")
// loop with array 
let colors = ["brown", "orange", "green", "yellow", "black", "blue", "pink", "purple"]
let values = [10,20,30,40,50,60,70,80,90,100]


//  colors
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index])  
}


//  values
for (let i = 0; i < values.length; i++) {
    console.log(values[i])
}


// this loop will print first character of each color values
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i][0])
    
}



//  Nested loop
console.log("__________________ Nested for loop _________________________")

for (let i = 1; i <= 5; i++) {
    console.log(`outer looop value:  ${i}`)
    for (let j = 1; j <= 5; j++) {
        console.log(`inner loop value: ${j} and outer value: ${i}` )
        
    }
}





//// node _01_basics/_05_loops/_01_for-loop.js