// slice():
// Returns: A new array containing elements selected from the original array.
// Original array: Not modified.
// Syntax: array.slice(start, end)
// Behavior: Creates a shallow copy of the original array, starting from the start index up to (but not including) the end index. The original array remains unchanged.




// In summary, slice is used for extracting a portion of an array without modifying the original,
//  while splice is used for making direct changes to the array, such as removing, replacing, or adding elements.



let colors = ["black", "blue", "green", "orange", "yellow"]


//// *** slice  method: to a slice from array in range  but  doesn't modify original array
colors.slice(0,3) // starts from 0 and ends before 3 on 2
console.log(colors.slice(0,3)) // get values : [ black, blue, green ]
console.log(colors) // [ original array]



console.log("____ splice method ___")


//// *** splice method :  get 2 perameters start and number of elemets to be deleted : modify original array
// Modify original array
// Return : Array 
// Feature : Delete elements from array also replace with new elements
colors.splice(0,3) // removed : blue and green
console.log(colors) // orange , yellow





let fruits = ["apple", "orange", "banana", "peach", "mango", "melon", "grapes", ]
fruits.splice(0,2,"pineapple","guava") // start from 0 : delete 2 elements and : add new elements on the deleted place
console.log(fruits)// removed apple and orange and added pineapple and guave


/// note can add sinle or more than one elements or we can add another array

fruits.splice(0,3,colors) // delete pineapple , guave and banana : and add new array ['orange', 'yellow']
console.log(fruits)
