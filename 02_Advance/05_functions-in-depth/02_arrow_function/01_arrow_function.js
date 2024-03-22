


// Arrow function , Es6

// example -1
let shoot = () => {
    console.log("Shoot Him")
}
shoot() // calling function


// example -2 with return keyword
let country = ()=>{
return "Pakistan"
}
country(); // no output  because no console
console.log(country()) // now it will show output



// example-3 with parameter and argument
let fire = (a) =>{
    console.log(a)
}
fire("fire")




//  : Example
let greet = (name) => {
    return  `Hello ${name} how are you`
}
console.log(greet("Abid Ali"))




//  Example

let getPercentage = (obtainedMarks) => {
    let totalMarks = 500
    let precentage = `${obtainedMarks / totalMarks * 100}`
    return `your have got ${precentage}%`

}

console.log(getPercentage(480))

