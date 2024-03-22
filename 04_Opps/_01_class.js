// Class : object, Propert , Method
// types of Method: (Prototype, Constructor, Static)


////    **********   example -1  with Prototype  ********

class run {
  call() {
    console.log("Hello World")
  }
}

// creating object from class run
let obj1 = new run();

// printing
obj1.call(); // Hello world

////______________________________________________________________________


//// **********     example 2  with prototype method and parameter  **********

class play{

    fun(text){
       console.log(text)
    }
}

// creating multiple objects from a single class
let obj2 = new play();
let obj3 = new play();
let obj4 = new play();

// printing
obj2.fun("Play Cricket"); // Play Cricket
obj3.fun("Play Football"); // Play Football
obj4.fun("Play Hockey"); // Play Hockey


//// ____________________________________________________________________


//// ********    Example 3 with constructor method  **********

class eat{
    constructor(){
       console.log("I am eating")
    }
}
 let obj5 = new eat();

 // Note : constructor will call auto


///// ___________________________________________________________________


//// ****      Example 4 With constructor and  prototye methods

class school{

    constructor(name, address){
        this.schoolName = name;
        this.schoolAddress = address
       console.log("The Next Educators")
    }

    info(){
        console.log(this.schoolName );
        console.log(this.schoolAddress );
    }
   
}

// creating objects
let obj6 = new school("The Next Educators", "Hairan Gali, Pareshan Road");
let obj7 = new school("The React Educator", "karachi Pakistan");

// calling
obj6.info()
obj7.info()




///// -______________________________________________________________________



/////    ***********    Example 5 with static method
// Note: can not create object with static method


class address {

    static myInfo(){
        console.log("I am living in Karachi");
    }
}

// let obj8 = new address();
// obj8.address()
// error can not create object of static method

address.myInfo(); // no error







/// node _01_class.js
