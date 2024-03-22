//  Conversion of Data Types :


let num1 = 123; // type number
console.log("type checking : ", typeof(num1)); // checking data type  


let num2 = "112233" // type string
console.log("type checking : ",typeof(num2)) // checking data type


// 01 : conversion Number to String
let converted1 = String(num1); // convertng
console.log("Number to String : ", typeof(converted1)); // checking



//  02 : Conversion String to Number
let converted2 = Number(num2); // converting
console.log("string to number : " , typeof(converted2)); // number


//  can we convert it into number ?
let pincode = "abcd"
let converted3 = Number(pincode);
console.log("Pure string to number : " , typeof(converted3));
//  Type converted but can not perform operations : see below
console.log(converted3 + 777) // NaN (not a number)



// Round 2 Conversion of Null Data type to Number and String
console.log("Round - 2  : null to number and string ")
let val1 = null;
console.log(val1); // null
console.log(typeof(val1)); // Type is Object


//  Converting to Number
let null_number = Number(val1);
console.log(typeof(null_number)); // number Converted
console.log(null_number) // value = 0


// Note : null has Object data type by default
// Note : null default value is (null) but when converted to numbers its values become ( 0 ) 




//  part 3
console.log("Part - 3 : Operartion on string and numbers")
console.log(2 + 3) // 5
console.log(2 + "3") // 23
console.log("2" + 3) // 23
console.log("2" + 3 + 4  ) // 234
console.log(2 + 3 + "4") // 54
console.log(2 + "3" + 4 ) // 234


//  BODMAS

console.log(2 + 3 * 3) // 11 multiply first
console.log(10  + 15 / 3 * 4) // 30 
console.log( (10  + 11 ) / 3 * 4) // 28



//  Boolean
console.log(true) // true
console.log(false)  // false

// with +
console.log(+ true) //1
console.log(+false) // 0
// console.log(true+) // error


// with -
console.log(-true) // -1
console.log(-false) // -0









////  node _12_conversion_data_types.js