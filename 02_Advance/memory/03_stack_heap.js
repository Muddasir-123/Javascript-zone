//// Stack and Heap  


//// 01: stack 

// The stack is a region of memory that follows a Last In, First Out (LIFO) structure. 
// It's used for static memory allocation and manages function call execution, 
// storing local variables and function call information.

// EXAMPLE :
function foo() {
    let x = 10; // `x` is stored on the stack within the scope of `foo`
    console.log(x);
  }
  
  foo(); // When `foo` is called, its execution context (including `x`) is added to the stack
  

//   Here, the variable x is stored on the stack within the scope of the foo function. 
//   When foo is called, its execution context (including variables like x) is added to the stack.
//   Once the function execution is complete, its context is removed from the stack.


////// __________________________________________________________________________________________________________________//////




//// 02: heap 

// The heap is a larger, less organized region of memory that handles dynamic memory allocation. 
// It's where objects, arrays, and other larger sets of data are stored.
// Data in the heap isn't managed in a particular order like the stack; instead,
// it's more free-form and allows for flexible allocation and deallocation.

// EXAMPLE :
let obj = { name: 'John', age: 30 }; // `obj` is stored in the heap
let arr = [1, 2, 3, 4]; // `arr` is stored in the heap as well


// Here, the variables obj and arr contain references to objects stored in the heap.
// The actual data (the object { name: 'John', age: 30 } and the array [1, 2, 3, 4]) reside in the heap,
// while the variables obj and arr on the stack hold references to their respective data in the heap.



//// -- 

// Understanding the stack and heap is essential in programming because it affects how memory is managed, 
// how data is stored, and how variables interact with each other during program execution.