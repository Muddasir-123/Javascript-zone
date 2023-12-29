// Objects are to used to sotre multiple values of multiple data types
//  objects has keys and values pairs


//  creating object
let data = {
    name:"Abid kk",
    age:23,
    city:"Mirpurkhas",
    status:true
}

// accessing object

console.log(data) // print whole object

//// access object values by dot notation
console.log(data.name) // Abid kk
console.log(data.city) //Mirpurkhas

// access object values by square notation
console.log(data["age"]) // 23
console.log(data["status"]) // true



//// Two ways to declare objects

// 01 Singleton 
let myData = new Object()
myData.name = "Muhammad Aslam"
console.log(myData)


// 02: object literal
let yourData = {
    name:"Muhammad Nasir"
}
console.log(yourData)







// Note: We will learn more about Objects in upcoming steps