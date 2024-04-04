/*
Q3. Reverse Bits

Problem Description
Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints
0 <= A <= 232



Input Format
First and only argument of input contains an integer A.



Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input
Input 1:

 0
Input 2:

 3


Example Output
Output 1:

 0
Output 2:

 3221225472


Example Explanation
Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000

*/

let a = 3
let b = 0

function binRevDec(a)
{
    let arr = []
    for(let i=0;i<32;i++)
    {
        c = Math.floor(a % 2)
        d = Math.floor(a/2)
        arr.push(c)
        a=d
    }
    let binaryNumber = arr.join('')
    let decimalNumber = parseInt(binaryNumber, 2);
    return decimalNumber
}

console.log(binRevDec(a)) //OUTPUT : 3221225472

console.log(binRevDec(b)) //OUTPUT : 0
 




