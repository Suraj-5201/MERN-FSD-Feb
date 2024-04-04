/*
Subarray Product Less Than K
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of 
all the elements in the subarray is strictly less than k.
Example 1:
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

let arr = [10,5,2,6]
let p=1
let count=0
let result = 0


for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    { 
        p = arr[i]*arr[j]
        console.log(i,j)
        if(p<100)
        {
            count++
        }
        p=1
    }
    
}
console.log(count)