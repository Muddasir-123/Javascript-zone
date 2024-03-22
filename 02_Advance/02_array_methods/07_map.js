console.log("Array Map Methods")

let laptop = [ 
    {
        name:"Dell",
        price:75000,
        color:"black"
    },

    {
        name:"Lenovo",
        price:65000,
        color:"gray"
    },

    {
        name:"Hp",
        price:84000,
        color:"white"
    },
]


// 01 map methods
laptop.map((item)=>{
    console.log(item) // print all objects

    console.log(item.color) // print all colors
})






console.log("________________________________________________________________")


console.log("________ map with console inside")


// try to return | store in a varuable

// with console inside
const laps = laptop.map((i)=>{
    console.log(i) // will print values but return undefined against each object
})
console.log(laps)


console.log("_________ map with return inside  _______ ")


// with return inside
const lap = laptop.map((l)=>{
    return l
    // return l.name  
})
console.log(lap)


// node _06_higher_order_loops/_05_map.js 
// only one return statement works in a loop