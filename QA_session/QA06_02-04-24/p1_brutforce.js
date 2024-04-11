let arr = [2,2,1,1,1,2,2,3,3,3,3]
arr.sort()
let n = arr.length / 2
let arr2 = []
let N=10

for(let i=0;i<N;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            arr2.push(arr[j])
        }
    }
    if(arr2.length>n)
    {
        console.log(arr2[0])
        break
    }
}




