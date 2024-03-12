//Printing Cummulative array

let arr = [1,2,3,4,5,6]
let cum_arr = []
cum_arr.push(arr[0])

for(let i=1;i<arr.length;i++)
{

    cum_arr[cum_arr.length] = cum_arr[i-1]+arr[i]
    //cum.arr.push(cum_arr[i-1]+arr[i])
}

let cum_odd = []
function cum_odd_arr(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(i==0)
        {
            cum_odd.push(0)
        }
        else if (i%2!=0)
        {
            cum_odd.push(arr[i]+cum_odd[i-1])
        }
        else
        {
            cum_odd.push(cum_odd[i-1])
        }
    }
    console.log(cum_odd,"cummulative odd array")
}

let cum_even = []
function cum_even_arr(arr)
{
    cum_even.push(arr[0])
    for(let i=1;i<arr.length;i++)
    {
       
        if (i%2==0)
        {
            cum_even.push(cum_even[i-1]+arr[i])
        }
        else
        {
            cum_even.push(cum_even[i-1])
        }
    }
    console.log(cum_even,"cummulative even array")
}



console.log(arr,"arr")
console.log(cum_arr,"Cummulative array")
cum_odd_arr(arr)
cum_even_arr(arr)