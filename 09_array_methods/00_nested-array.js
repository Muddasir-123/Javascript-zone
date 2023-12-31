/// ****   Nested array or Array of arrays  **** ///

// simple array 
let c1 = ['book1', 'book2', 'book3', 'book4', 'book5']


//// ****  nested array  : EXAMPLE 1
let c2 = ['black', 'brown','purple',['blue', 'orange', 'yellow'] ]
console.log(c2)
// access nested array values
console.log(c2[2]) // purple
console.log(c2[3]) // ['blue' 'orange', 'yellow']
console.log(c2[3][1]) // orange




///// ***** nested array : EXAMPLE 2
let c3 = ['100', '200', '300', '400', '500', ['111', '222', '333', '444', '555',['123', '456', '789', '246', '357']]]
console.log(c3)
console.log(c3[3])// 400

console.log(c3[5]) // ['111', '222', '333', '444', '555',['123', '456', '789', '246', '357']]

console.log(c3[5][4]) /// 555
console.log(c3[5][5]) // ['123', '456', '789', '246', '357']

console.log(c3[5][5][1]) // 456