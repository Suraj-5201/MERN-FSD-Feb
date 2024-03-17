//Given a number N, set the ith bit oF N
let a = 10 //1010
i=3

let result = a|(1<<(i-1))

console.log(result)

//OUTPUT : 14 //1110
