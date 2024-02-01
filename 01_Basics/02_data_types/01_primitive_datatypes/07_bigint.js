// Representing Arbitrarily Large Integers: BigInts are a primitive data type introduced in ES2020 specifically designed to handle integers of arbitrary size, beyond the limitations of the standard Number type.
// Breaking Number Limits: While Number can accurately represent integers up to 2^53 - 1, BigInts can handle numbers as large as you need, without loss of precision.


//// Key Characteristics:

// Creation: You can create BigInts in two ways:
// Appending n to an integer literal: 
const bigNum1 = 9007199254740991n;
// Using the BigInt() function: 
const bigNum2 = BigInt(12345678901234567890);
// No Decimals: BigInts only represent whole numbers, not decimals or fractions.
// Immutable: Their values cannot be changed after creation.
// Stored Separately: BigInts are stored in a different memory format than Numbers, ensuring accurate representation of large integers.
// Common Operations:

// Basic Arithmetic: +, -, *, /, %, ** (exponentiation)
// Comparisons: ==, !=, <, >, <=, >=
// Bitwise Operations: &, |, ^, ~, <<, >>


// Note : We will learn about operators later on.



//// When to Use BigInts:

// Cryptographic Applications: Handling large encryption keys or prime numbers
// Financial Calculations: Precise calculations with large monetary values
// Scientific Computing: Working with astronomically large numbers or extremely precise calculations
// Data Encoding and Compression: Algorithms that benefit from arbitrarily large integers
// Specific Libraries and Frameworks: Some libraries or frameworks might require BigInts for certain operations


console.log("Examples")
// example 01
const largeNumber = 9007199254740991n * 9007199254740991n; // BigInt calculation
console.log(largeNumber); // 81129638414606663681390495662081n


// example 02
const largenumber2 = BigInt(12345678901234567890) + BigInt(2313123121312316);
console.log(largenumber2) // 12347992024355879484n