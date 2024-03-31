let arr = [1,3,2,4,5,9]


function max(arr)
{
    let max = Number.MIN_VALUE
    let temp=0
    for(let i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max = arr[i]
        }
    }
    return max
}

console.log(max(arr))