let arr = [-7,1,5,2,-4,3,0]
let cum_arr = []
cum_arr[0]=arr[0]
let flag=0

for(let i=1;i<arr.length;i++)
{
    cum_arr.push(cum_arr[i-1]+arr[i])
}
//console.log(cum_arr)

function findminInd(arr)
{
    for(let i=1;i<arr.length-1;i++)
    {
        let sum1=0
        let sum2=0
        for(let l=0;l<i;l++)
        {
            sum1 = sum1 + arr[l]
        }
        for(let r=arr.length-1;r>i;r--)
        {
              sum2 = sum2 + arr[r]
        }
        //console.log(sum1,sum2)

        if(sum1==sum2)
        {
            flag=1
            console.log(i)
            break
        }
    }
    if(flag==0)
    {
        console.log(-1)
    } 
    
}

findminInd(arr)

//OUTPUT 3