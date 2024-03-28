/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

let a1 = [1,2,3,1]
let a2 = [1,2,3,4]
let a3= [1,1,1,3,3,4,3,2,4,2]

function check(arr)
{
    let arr2=[]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                arr2.push(arr[i])
            }
        }
    }
    if(arr2.length>0)
    {
        return true
    }
    else{
        return false
    }
}

console.log(check(a1))
console.log(check(a2))
console.log(check(a3))





