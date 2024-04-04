/*
Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
*/

let arr = [2,2,1,1,1,2,2]
let count ={}

let n = arr.length/2

function hashmap(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]
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

for(let num in count)
{
    console.log(`${num} : ${count[num]}`)
    if(count[num]>n)
    {
        console.log(`${num}`)
    }
}