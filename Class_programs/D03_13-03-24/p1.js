//Given an array print the sum of all sub array

/* First approach

let arr = [4,-1,1,6,5]
let sum =0

for(let l=0;l<arr.length;l++)
{
    for(r=l;r<arr.length;r++)
    {
        for(let i=l;i<=r;i++)
        {
            sum = sum + arr[i]
        }
    }
}
console.log("Sum of all sub array is : ",sum)
*/

let arr = [4,-1,1,6,5]

let cum_arr = []
cum_arr[0]=arr[0]

for(let i=1;i<arr.length;i++)
{
    cum_arr.push(arr[i]+cum_arr[i-1])
}

console.log(cum_arr)
let sum =0
for(let l=0;l<arr.length;l++)
{
    for(let r=l;r<arr.length;r++)
    {
        if(l==0)
        {
            sum = sum + cum_arr[r]
        }
        else
        {
            sum = sum + (cum_arr[r]-cum_arr[l-1])
        }
    }
}

console.log("Sum of all sub array is : ",sum)

// OUTPUT  Sum of all sub array is :  94