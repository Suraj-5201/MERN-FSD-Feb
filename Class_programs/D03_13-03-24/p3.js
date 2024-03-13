/* Given an array find the length of amallest sub_array which contains both max and min array*/

let arr = [1,2,3,1,3,4,6,4,6,3]

let min = Math.min.apply(null,arr)
let max = Math.max.apply(null,arr)

let min_length = Number.MAX_VALUE


for(let l=0;l<arr.length;l++)
{
    if(arr[l]==min)
    {
        for(let r=l+1;r<arr.length;r++)
        {
            if(arr[r]==max)
            {
                let count_length = r - l + 1
                if(min_length>count_length)
                {
                    min_length = count_length
                }
            }
        }
    }
    else
    {
        if(arr[l]==max)
         {
             for(let r=l+1;r<arr.length;r++)
            {
                if(arr[r]==min)
                {
                    let count_length = r - l + 1
                    if(min_length>count_length)
                    {
                        min_length = count_length
                    }
                }
            }  
        }
    }
} 
console.log(min_length)
