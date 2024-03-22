///// ********      OBJECT DESTRUCTURE  ********* ///////

////   _____    Example -1

let obj1 = {
    name:'Abid',
    age:23,
    city:'Karachi',
    status:'true',
}

// Destructuring
let {name, age, city, status} = obj1;

// printing
console.log(name); // Abid
console.log(age);  // 23
console.log(city); // Karachi
console.log(status);// true 



//// xxxxxxxxxxx     note -1     xxxxxxxxxxxxx

let {myName} = obj1
console.log(myName) // undefined

// because we have to name it as property name



//// xxxxxxxxxxxxxx        note -2 change variable name     xxxxxxxxxxxx

let obj2 = {
    name:"Aslam",
    age:29,
    area:"Sukkur"
}

// destructuring
let {name: n ,age: a , area } = obj2
console.log(n)  // Aslam
console.log(a)  // 29
console.log(area) // Sukkur







///// _____________________________________________

// node _07_object_destructure.js
