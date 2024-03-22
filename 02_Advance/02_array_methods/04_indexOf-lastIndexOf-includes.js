let colors = ["black", "blue", "green", "orange", "yellow", "blue"]


///// **** indexOf : return index of given element : if element not found return -1
console.log(colors.indexOf("black")) // 0
console.log(c2 = colors.indexOf("blue")) // 1
console.log(colors.indexOf("yellow", "blue")) // 4 : can not return index of second value
console.log(colors.indexOf("purple")) // -1




//// **** .lastIndexOf() : return index value : but check from last : if element not found return -1
console.log(colors.lastIndexOf("blue")) // 5
console.log(colors.indexOf("purple")) // -1




//// ****   .includes() : return true if given vales is found else return false
console.log(colors.includes("yellow",)) // // true
console.log(colors.includes("blue")) // true
console.log(colors.includes("gray")) // false


