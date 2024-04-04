/*
Q1. Single Number

Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



Problem Constraints
1 <= |A| <= 2000000

0 <= A[i] <= INTMAX



Input Format
The first and only argument of input contains an integer array A.



Output Format
Return a single integer denoting the single element.



Example Input
Input 1:

 A = [1, 2, 2, 3, 1]
Input 2:

 A = [1, 2, 2]


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

3 occurs once.
Explanation 2:

1 occurs once.

*/

let arr1 =  [1, 2, 2, 3, 1]
let arr2 = [1, 2, 2]
count = {}

function hashMap(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let num = arr[i]
        let flag =0
        for(let key in count)
        {
            if(key==num)
            {
                count[key]++
                flag=1
                break
            }
        }
        if(flag==0)
        {
            count[num]=1
        }
    }
    return count
}


hashMap(arr2)
for(let num in count)
{
    if(count[num]==1)
    {
        console.log(num)
    }
}

/* OUTPUT

Fot input 1 : 3

For input 2 : 1

*/