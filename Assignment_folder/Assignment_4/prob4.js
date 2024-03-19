/*
Q4. Product array puzzle

Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]
*/


//let arr = [1,2,3,4,5] //Input1
let arr = [5,1,10,1]  //Input2
let l=1
let r=1
let result = 1
let arr2=[]

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        r = r * arr[j]
    }
    for(let k=i;k>0;k--)
    {
        l = l * arr[k-1]
    }
    arr2.push(l*r)
    l=1
    r=1
}
console.log(arr2)

/*OUTPUT

For Input 1 : [ 120, 60, 40, 30, 24 ]

For Input 2 : [ 10, 50, 5, 50 ]
*/
