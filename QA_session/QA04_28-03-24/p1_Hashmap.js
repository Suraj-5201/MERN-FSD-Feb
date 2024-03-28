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

let arr = [1,1,1,3,3,4,3,2,4,2]
let count ={}

function hashmap(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let num = arr[i]
        let flag=0
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

hashmap(arr)
let flag=0
for(let num in count)
{
    if(count[num]>1)
    {
        console.log("True")
        flag=1
        break
    } 
}
if(flag==0)
{
    console.log("False")
}