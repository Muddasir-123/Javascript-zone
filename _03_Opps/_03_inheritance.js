////                         ********   Inheritsnce  ********

//// Example -1

// Base Class
class A {
  constructor() {
    console.log("Hello Inheritance");
  }
}

// Drived class
class B extends A {}

let obj1 = new B(); // calling drived class

////______________________________________________________________

///  Example -2  with super keyword
/// Use super in drived class to get constructor of Base class
/// without super will through error on runtime

// Base class
class x {
  constructor() {
    console.log("Hello");
  }
}

class y extends x {
  constructor() {
    super(); // super keyword
    console.log("World");
  }
}

let obj2 = new y(); // calling drived class




//// ________________________________________________________________________

//// Example -3 with prototype (super.function_Name)

// Base class
class f {
    show(){
        console.log(200)
    }
}

// Drived class
class e extends f {
    call(){
        // super()  // error 
        super.show()
        console.log(300)
    }
}
let obj3 = new e(); // creating object

obj3.call(); // calling 


////________________________________________________________________________

/// Example -4 
class employ {
    constructor(id, name, age, salary){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary
        console.log(`Id:${id} Name:${name} Age:${age} Salary:${salary}`)
    }


  


}

let obj4 = new employ(12,"Asif", 32, 53000);














////  node _03_inheritance.js

