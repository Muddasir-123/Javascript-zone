console.log("Lexical Scope");

// Childs function has the access of Parent function
// Parent function does not have the access of childs
// Sibling does not have acccess of each other too.



////  -------     Example - 1  ( parent to child ) no error

// Parent Function
function parent(){
    let father_name = "Noman Ali" // variable declared in parent

// Child function
function child(){
    console.log(father_name); // using in child funtcion
}
child() // calling child 

}
parent() // calling parent




////  -----------  Example  - 2   ( child to parent  ) x error x
// Parent function
function parent1(){

// Child function
function child1(){
    let name1 = "Chotu"
}
child1(); // calling child
}
// console.log(name1)// calling child in parent scope : error x

parent1(); // calling parent






//// --------  Example 3 (  child to child )  x error x

// Parent function
function mother(){
    
// child 1 brother
function brother(){
    let broName = "Muhammad Ali"
}
brother();// calling 

// child 2 sister
function sister(){
    //console.log(broName); // getting borther in sister scope x error x
}
sister(); //calling
}

mother(); // calling mother







// node _10_lexical_scope.js
