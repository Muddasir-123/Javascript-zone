console.log("This is for in loop")


// 01  for in loop with objects
let data = {
    js:"Javascript",
    ts:"Typescrpt",
    py:"Python"
}

//
for (const key in data) {
console.log(key) // will print only keys
console.log(data[key]) // will print only values
}


// for (const [k,v] in data) {
//     console.log(k,v)
//     }




//  02 for in loop on arrays
let arr = ["karachi", "Hyderabad", "Mirpurkhas", "Lahore", "Islamabad"]
for (const key in arr) {
    console.log(key) // will print indexes of arrays
    console.log(arr[key]) // will print values of arrays

}
