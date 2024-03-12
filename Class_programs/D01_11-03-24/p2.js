/* Given an array an index is said to be special if su of all even index elements [ls] == [rs] sum of all odd index element, find the count of special index */




let arr = [1,5,6,4,3,7];
console.log(arr,"arr")
let n = arr.length;
let cum_odd_arr = [];
let cum_even_arr = [];


function coa(arr)
{
    cum_odd_arr.push(0);
    for (let i = 1; i < n; i++) 
    {
        if(i%2!=0)
        {
            cum_odd_arr.push(arr[i]+cum_odd_arr[i-1])
        }
        else
        {
            cum_odd_arr.push(cum_odd_arr[i-1])
        }
    }
    console.log(cum_odd_arr,"cum_odd_arr")
}


function cea(arr)
{
    cum_even_arr.push(arr[0]);
    for (let i = 1; i < n; i++) 
    {
        if(i%2==0)
        {
            cum_even_arr.push(arr[i]+cum_even_arr[i-1])
        }
        else
        {
            cum_even_arr.push(cum_even_arr[i-1])
        }
    }
    console.log(cum_even_arr,"cum_even_arr")
}

cea(arr)
coa(arr)

let result=''
let count=0
for(let i=1;i<=n-2;i++)
{
    a1=cum_even_arr[i-1]
    a2=cum_odd_arr[arr.length-1]-cum_odd_arr[i]
    if(a1==a2)
    {
        console.log("Special feature Index is :",i)
        count+=1
    }
}
console.log("Count: ",count)

/* OUTPUT
[ 1, 5, 6, 4, 3, 7 ] arr
[ 1, 1, 7, 7, 10, 10 ] cum_even_arr
[ 0, 5, 5, 9, 9, 16 ] cum_odd_arr
Special feature Index is : 3
Special feature Index is : 4
Count:  2

 */