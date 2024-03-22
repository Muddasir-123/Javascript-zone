// es5 function

//01:  function with return inside
function fun1(){
    return "Hello Functions"
}
console.log(fun1())



// 02:   function with console inside
function fun2(){
    console.log("Hello Function 2")
}
fun2()


// ES6  Arrow functions
let fun3 = ()  => {
    console.log("Hello, I am arrow function")
}
fun3()





console.log(`--------------------------------------------------`)
////  console  - vs - return   in a function


//01:  function with console
let doSum1 = (x,y)=>{
    console.log(x + y)
}
let sum1 = doSum1(10,20) // storing into a variable
console.log(`I am console function ${sum1 }`) // undefined




//02:  function with return
let doSum2 = (x, y)=>{
    return x + y
}
let sum2 = doSum2(10, 20) // storing into a variable
console.log(`I am from return function ${sum2}`) // 30



// Note : You can console function returns "undefined" And return function returns the actual value
t 
    