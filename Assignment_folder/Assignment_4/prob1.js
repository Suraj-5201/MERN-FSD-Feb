/* Q1
Q1:  equilibrium
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5 
*/




let arr = [-7,1,5,2,-4,3,0]      //Input1
//let arr = [1,2,3]              //Input 2
//let arr = [10,-6,6,-6,10]      //Input3

let cum_arr = []
cum_arr[0]=arr[0]


function cum_ar(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        cum_arr.push(arr[i]+cum_arr[i-1])
    }
    //console.log(cum_arr)
}

cum_ar(arr)
let flag=0
for(let i=1;i<arr.length-1;i++)
{
    let ls = cum_arr[i-1]
    let rs = cum_arr[cum_arr.length-1]-cum_arr[i]
    if(ls==rs)
    {
        console.log(i)
        flag=1
        break
    }
}

if(flag==0)
{
    console.log(-1)
}


/* OUTPUT

Output for Input 1
3

Output for Input 2
-1

Output for Input 3
1

*/
