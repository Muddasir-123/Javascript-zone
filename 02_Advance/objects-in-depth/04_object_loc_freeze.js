console.log("Object Freeze");
// after the freeze , object values can not be changed.


// declare object
let data = {
    name:"Kamal khan",
    age:40,
    city:"Mirpurkhas",
    status:false
}
console.log(data)

// modify object value
data.name = "Jamal"
console.log(data)


// freeze object
Object.freeze(data)
data.city = "Karachi"
console.log(data)

//// node _04_object_methods/_03_object_loc_freeze.js