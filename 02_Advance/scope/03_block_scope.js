//// 03: Block Scope (with let and const):

//// Introduced with ES6, let and const create block-level scope.
//// Variables declared with let or const inside blocks (e.g., if, for) are only accessible within those blocks.
//// blocks are { } curly brackets

//// Example:


if (true) {
    var a = 10
    let b = 20
    const c = 30
}

console.log(a)
// console.log(b) // b is not defined
// console.log(c) // c is not defined


//// note a is printing its value but b and c are not 
//// Now we have learnt var has global scope can be access from anywhere but let and const can only be used inside the block 




////  Example 2 : access let and const insdie the block
if (true) {
    let x = 100
    const y = 200
    console.log(x+y) // 300  : accessing let and const insde the block
}