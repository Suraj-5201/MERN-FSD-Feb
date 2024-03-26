/*
Leaders in an array



Problem Description
Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.

NOTE: The rightmost element is always a leader.


Problem Constraints
1 <= N <= 10^5
1 <= A[i] <= 10^8


Input Format
There is a single input argument which a integer array A


Output Format
Return an integer array denoting all the leader elements of the array.


Example Input
Input 1:
 A = [16, 17, 4, 3, 5, 2]
Input 2:
 A = [5, 4]


Example Output
Output 1:
[17, 2, 5]
Output 2:
[5, 4]
*/

let arr = [16, 17, 4, 3, 5, 2]
//let arr = [5, 4]
let arr2 = []
arr2[0]=arr[arr.length-1]
let max = arr[arr.length-1]


for(let i=arr.length-1;i>=0;i--)
{
    if(arr[i]>max)
    {
        max = arr[i]
        arr2.push(arr[i])
    }
}

console.log("Leaders : ",arr2)

/* OUTPUT
For input 1 : Leaders :  [ 2, 5, 17 ]
For input 2 : Leaders :  [ 4, 5 ]
*/