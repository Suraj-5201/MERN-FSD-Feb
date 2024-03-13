// Find maximum and minimum sub array sum 

let arr = [4,-1,3,-3]
let sum =0
let max = Number.MIN_VALUE
let min = Number.MAX_VALUE
for(let l=0;l<arr.length;l++)
{
    for(let r=l;r<arr.length;r++)
    {
        for(let i=l;i<=r;i++)
        {
            sum = sum + arr[i]
        }
        //console.log(sum)
        if(max<sum)
        {
            max = sum
        }
        if(min>sum)
        {
            min = sum
        }
        sum =0
    }
}
console.log("Maximun sub array sum: ",max)
console.log("Minimum sub array sum: ",min)

/* OUTPUT
Maximun sub array sum:  6
Minimum sub array sum:  -3 */