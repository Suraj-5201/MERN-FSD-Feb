//8. How would you swap two numbers without using a third variable?

let a = 4
let b = 5

console.log("Before swap ",a,b)
a = a + b
b = a - b
a = a - b
console.log("After swap ",a,b)