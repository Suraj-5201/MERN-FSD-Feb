/*
Maximum Subarray Easy



Problem Description
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.


Problem Constraints
1 <= A <= 10^3
1 <= B <= 10^9
1 <= C[i] <= 10^6


Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format
Return a single integer which denotes the maximum sum.


Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output
Output 1:
12
Output 2:

0


Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:

All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.
*/


let arr = [2, 1, 3, 4, 5]
//let arr = [2,2,2]           //Input 2
let B=12
//let B =1                    //Input 2
let arr2 = []
let sum = 0
let max_sum = 0


for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        for(let k=i;k<=j;k++)
        {
            sum = sum + arr[k]
        }
        if(sum<=B)
        {
            if(sum>max_sum)
            {
                max_sum=sum
            }
        }
        sum=0
    }
}
console.log(max_sum)


/* OUTPUT
For input 1 = 12
For input 2 = 0

*/