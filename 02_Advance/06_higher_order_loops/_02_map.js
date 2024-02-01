// Map are used for unique keys : note key should be unique in map


// example 1
const map = new Map
map.set("pk","Pakistan")
map.set("uk","United kingdom")
map.set("uae", "United Arab Emirates")
map.set("pk","Pakistan") // will not print again same vales

map.set("pki","Pakistan")
console.log(map)




// example 2
const map2 = new Map
map2.set(1,"Karachi")
map2.set(2,"Islamabad")
map2.set(3,"Lahore")

console.log(map2)



// for of loop on map

// example 3

for (const key of map2) {
    console.log(key) // this will print key and values both in array format seperatly
    
}


// example 4  desctructure array 
for (const [key,value] of map2) {
    console.log(`key is ${key} and value is ${value} `)
    
}






// node _01_basics/_06_higher_order_loops/_02_map.js