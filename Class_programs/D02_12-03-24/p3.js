//Sub array

let arr = [7,9,5,6,11]
let sub_arr=[]

for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        for(let k=i;k<=j;k++)
        {   
            sub_arr.push(arr[k])
        }
        console.log(sub_arr)
        sub_arr=[]
    }
}

/* OUTPUT
[ 7 ]
[ 7, 9 ]
[ 7, 9, 5 ]
[ 7, 9, 5, 6 ]
[ 7, 9, 5, 6, 11 ]
[ 9 ]
[ 9, 5 ]
[ 9, 5, 6 ]
[ 9, 5, 6, 11 ]
[ 5 ]
[ 5, 6 ]
[ 5, 6, 11 ]
[ 6 ]
[ 6, 11 ]
[ 11 ]
*/