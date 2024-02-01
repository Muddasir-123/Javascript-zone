// note : we can call function before its declaration. But can't call functiion expression before declaration



// 01: simple function
user() // calling function before declaration : no error

function user(){
    console.log("I am a user")
}


// 02 : function expression
role() // calling expression function before declaration : error

const role = function(){
    console.log("I am Administrator")
}

// role() // calling function before declaration



// Note : why we can't call function expression before : because it is stored in a variable and we can't access variable before declaration

