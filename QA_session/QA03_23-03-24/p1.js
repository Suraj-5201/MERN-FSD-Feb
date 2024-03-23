/*
Number of 1 Bits
Problem Description
Write a function that takes an integer and returns the number of 1 bits it has.
Input Format
First and only argument contains integer A
Output Format
Return an integer as the answer
Example Input
Input1:
21
Example Output
Output1:
3
Example Explanation
Explaination1:
21 is represented as 10101 in binary.
*/


//Brutforce method
let a = 29 //10101
i=5
count=0


for(let i=1;i<=5;i++)
{
    let result = a & (1<<i-1)

    if(result==1 || result==2 || result==4 || result==8 ||result==16)
    {
        count++
    }
}


console.log(count)