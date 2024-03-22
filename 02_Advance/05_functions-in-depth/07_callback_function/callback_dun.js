// Callback functions are functions that are passed as arguments to other functions 
// and are executed after the completion of some operation or task.
// They are a fundamental concept in JavaScript, especially in asynchronous programming.



function fetchData(callback) {
    // Simulating asynchronous data fetching
    setTimeout(function() {
      var data = "Some fetched data";
      callback(data);
    }, 1000);
  }
  
//   callback function
  function processData(data) {
    console.log("Processing data:", data);
  }
  
  fetchData(processData);
  