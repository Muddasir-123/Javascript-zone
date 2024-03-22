console.log("Access Object values")

let product = {
    product_name : "Jogger black",
    price: 4500,
    size :"medium", 
}

console.log(product) // get whole object values

// There are two ways to access values of an object :

// 01 : dot notation
console.log(product.name) // product name
console.log(product.price) // product price


// 02 : square notation
console.log(product["product_name"])
console.log(product["price"])

