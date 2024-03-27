/*
Q2. Closest MinMax


Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

*/


let arr = [2,6,1,6,9]

let min = Math.min.apply(null,arr)
let max = Math.max.apply(null,arr)

let min_length = Number.MAX_VALUE


for(let l=0;l<arr.length;l++)
{
    if(arr[l]==min)
    {
        for(let r=l+1;r<arr.length;r++)
        {
            if(arr[r]==max)
            {
                let count_length = r - l + 1
                if(min_length>count_length)
                {
                    min_length = count_length
                }
            }
        }
    }
    else
    {
        if(arr[l]==max)
         {
             for(let r=l+1;r<arr.length;r++)
            {
                if(arr[r]==min)
                {
                    let count_length = r - l + 1
                    if(min_length>count_length)
                    {
                        min_length = count_length
                    }
                }
            }  
        }
    }
} 
console.log(min_length)


/* OUTPUT
Input 1 : 2

Input 2 : 3
*/