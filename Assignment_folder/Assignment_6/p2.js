/*
Even Subarrays


Problem Description
You are given an integer array A.

Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

Return "YES" if it is possible; otherwise, return "NO" (without quotes).



Problem Constraints
1 <= |A|, A[i] <= 10^6



Input Format
The first and the only input argument is an integer array, A.



Output Format
Return a string "YES" or "NO" denoting the answer.



Example Input
Input 1:

 A = [2, 4, 8, 6]
Input 2:

 A = [2, 4, 8, 7, 6]


Example Output
Output 1:

 "YES"
Output 2:

 "NO"


Example Explanation
Explanation 1:

 We can divide A into [2, 4] and [8, 6].
Explanation 2:

 There is no way to divide the array into even length subarrays.
*/


let arr = [2,4,6,7,8]
let flag=0

function eveIndex(arr)
{
if(arr.length%2==0)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            continue
        }
        else{
            flag=1
        }
    }
    if(flag==0)
    {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
else{
    console.log(false)
}  
}

eveIndex(arr)

/* OUTPUT

For input1 : true
For input2 : false

*/