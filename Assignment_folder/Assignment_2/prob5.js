//Declare an array and sum of all values in an array using loops - for, while  — Use functions

let arr = [1,2,3,4,5,6,7,8,9,10]

function arrAdd(arr)
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i]
    }
    console.log("Result: ",sum)
}

arrAdd(arr)

// OUTPUT
// Result:  55