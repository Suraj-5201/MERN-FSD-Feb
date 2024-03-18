/*
Q2. Range Sum Query



Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



Problem Constraints
1 <= N, M <= 10^5
1 <= A[i] <= 10^9
0 <= L <= R < N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]
*/


let arr1 = [1,2,3,4]
//let arr1 = [2,2,2]
let arr2 = [[0,3],[1,2]]
//let arr2 = [[0,0],[1,2]]
let arr3 =[]

let cum_arr1=[]
cum_arr1[0]=arr1[0]

function cummulative_array(arr)
{
    for(let i=1;i<arr1.length;i++)
    {
        cum_arr1.push(cum_arr1[i-1]+arr1[i])
    }
}
cummulative_array(arr1)

for(let k=0;k<arr2.length;k++)
{
     let l = arr2[k][0]
     let r = arr2[k][1]
    if(l==0)
    {
        arr3.push(cum_arr1[r])
    }
    else{
        arr3.push(cum_arr1[r]-cum_arr1[l-1])
    }
}
console.log(arr3)

/* OUTPUT
output1 : [ 10, 5 ]

output2 : [ 2, 4 ]
*/