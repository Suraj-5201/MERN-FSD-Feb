let arr = [-7,1,5,2,-4,3,0]
let cum_arr = []
cum_arr[0]=arr[0]
let flag=0
//let sum1=0
let sum2=0

for(let i=1;i<arr.length;i++)
{
    cum_arr.push(cum_arr[i-1]+arr[i])
}
//console.log(cum_arr)

/*function findInd(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let ls = cum_arr[i-1]
        let rs = cum_arr[cum_arr.length-1]-cum_arr[i]
        if(ls==rs)
         {
            flag=1
            console.log(arr[i])
            break
        }
    }
    if(flag==0)
    {
        console.log(-1)
    }
    
}

findInd(arr)
*/

function findminInd(arr)
{
    //let sum1=0
    //let sum2=0

    for(let k=0;k<arr.length-1;k++)
    {
        let sum1=0
        let sum2=0
        for(let i=k;i<arr.length;i++)
        {
            sum1 = sum1 + arr[i]
        }
        for(let j=arr.length-1;j>k;j--)
        {
              sum2 = sum2 + arr[j]
        }
        console.log(sum1,sum2)
    } 
    
}

findminInd(arr)