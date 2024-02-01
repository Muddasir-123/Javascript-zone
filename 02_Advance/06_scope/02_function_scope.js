////  02: Function Scope:
//// Each function creates its own private scope.
//// Variables declared inside a function are only accessible within that function.


var val1 = 1100; // variable declared outside of a function

function sum () {
    var2 = 2200; // variable declared inside of a function
}


console.log(val1) // 1100
console.log(val2) // Reference error val2 is not defined
