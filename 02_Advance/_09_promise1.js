// function resolve(){
//     console.log("congratulation its successfully done")
// }

// function reject(){
//     console.log("Sorry, its failed to execute")
// }

//// Part -1

// let complete = true
// let prom = new Promise(function(resolve, reject) {
//     if (complete) {
//         resolve("Successfull")
//     }else{
//         reject("I am Failed ")
//     }
// });

// console.log(prom)






//// Part -2   wrap in a function

// function prom(complete){
//     return new Promise(function (resolve, reject) {
//         if (complete) {
//           resolve("I am Successful");
//         } else {
//           reject("I am failed");
//         }
//       });
// }

// console.log(prom(true))





//// Part -3
// function prom(complete){
//     return new Promise(function(resolve, reject){
// console.log("Fetching data, please wait")
//         if(complete){
//             resolve("I am done")
//         }else{
//             reject("I am unable to do this")
//         };

//     });

// }
// let onSuccess = (result) => {
// console.log(result)
// }


// let onFail = (failed)=>{
//     console.log(failed)
// }


// // prom(true).then(onSuccess);
// // prom(true).catch(onFail)

// prom(true).then(onSuccess).catch(onFail)



// console.log(prom(true))


//// part 4 with setInterval

function prom(complete){
    return new Promise(function(resolve, reject){
console.log("Fetching data, please wait")
    setInterval(()=>{
        if(complete){
            resolve("I am done")
        }else{
            reject("I am unable to do this")
        };
    },2000)

    });

}
let onSuccess = (result) => {
console.log(result)
}


let onFail = (failed)=>{
    console.log(failed)
}


// prom(true).then(onSuccess);
// prom(true).catch(onFail)

prom(true).then(onSuccess).catch(onFail)





///  node _09_promise1.js
