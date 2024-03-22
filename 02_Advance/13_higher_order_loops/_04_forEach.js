console.log("This is forEach loop , Need a callback function")

let coding = ["Javascript", "Python", "Typescript", "Swift", "Dart", "Php"]


// 01 forEach
coding.forEach(function(lang){
    console.log(lang)
})


console.log("_______________________________________________________")

// 02 forEach with arrow function
coding.forEach((lang)=>{
    console.log(lang)
})



console.log("________________________________________________________")

// 03 forEach function before 
function call(lang){
    console.log(lang)
    
}

coding.forEach(call)
console.log("function before")



console.log("_____________________________________________________")



// 04 forEach with with other peratmeters

coding.forEach((lang, index, arr)=>{
    console.log(index) // indexes
    console.log(lang) // values
    console.log(arr) // whole array
})



console.log("_________________forEach with Array of Objects ________________________________")


// 05 forEach with array og object
let products = [
    {
        productName : "Red Snikers",
        category:"Male",
        quantity:100,
        price: 3000,
        size: "Medium"
    },


    {
        productName : "black Snikers",
        category:"Kids",
        quantity:50,
        price: 2000,
        size: "small"
    },


    {
        productName : "Jogger ",
        category:"Female",
        quantity:200,
        price: 5000,
        size: "large"
    },

]


products.forEach((p)=>{
console.log(p) // get all objects

console.log(p.category) // get category of all products

console.log(p.productName) // get all products name
})






console.log("____________________ ***** forEach does't return any value *****  _______________________")




// with console inside
const data = products.forEach((p) => {
    console.log(p)
})
console.log(data) //  undefinded 



// with return inside
const data1 = products.forEach((p) => {
    return p
})
console.log(data1) //  undefinded 





// when we neet to store in vaiable we can use map or filter methods

//  node _06_higher_order_loops/_04_forEach.js


