// use in non-primitive data types
// refrence of original variable or data
// changes will be made in original variable


// lets have an example of heap

let user1 = {
    name:"Jamal",
    age:30,
    status:true
}



let user2 = user1  // store user1 value in user2


// change some data in user2 
user2.name = "Kamal"

// let see both variables
console.log(user1.name) // Kamal
console.log(user2.name) // Kamal

// Note Original variable is also changed
