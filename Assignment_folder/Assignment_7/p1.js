/*
Q1. Max Sum Contiguous Subarray


Problem Description
Find the maximum sum of contiguous non-empty subarray within an array A of length N.



Problem Constraints
1 <= N <= 10^6
-1000 <= A[i] <= 1000



Input Format
The first and the only argument contains an integer array, A.



Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.



Example Input
Input 1:

 A = [1, 2, 3, 4, -10] 
Input 2:

 A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output
Output 1:

 10 
Output 2:

 6 


Example Explanation
Explanation 1:

 The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:

 The subarray [4,-1,2,1] has the maximum possible sum of 6. 
*/


//let arr = [1, 2, 3, 4, -10]
let arr =  [-2, 1, -3, 4, -1, 2, 1, -5, 4]  
let arr2 = []
let sum = 0
let max_subarr_sum = Number.MIN_VALUE


for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        for(let k=i;k<=j;k++)
        {
            sum = sum + arr[k]
        }

        if(sum>max_subarr_sum)
        {
            max_subarr_sum=sum
        }
        arr2=[]
        sum=0
    }
}
console.log(max_subarr_sum)


/* OUTPUT
For input 1 = 10
For input 2 = 6
*/