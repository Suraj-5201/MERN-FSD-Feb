//Given a number N, Not set the ith bit of N
let a = 10 //1010
i=2

let result = a^(1<<(i-1))

console.log(result)

//OUTPUT : 8 //1000