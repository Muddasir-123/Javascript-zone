//  In parent child scope child can access the parent variables but parent can not access the child variables


// 01: exampple wit functions

function one(){
    const username = "Abidkk";


    function two(){
        const password = "abc123"
        console.log(username) // accessing parent variable in child
    }

    two() // calling child 

    console.log(password) // accessing child variable in parent : error password is not defined

}

one()


// note : you can see that parent can not access child variables : but it is possible with closure concept






// 02 : example with if else

if (true) {
    const name = "Junaid khan"

    if (true) {
        const role =  "admin"
        console.log(name)  // accessing parent variable into child scope  
    }


    console.log(role) //  accessing child variable into parent scopre: will show error 
}