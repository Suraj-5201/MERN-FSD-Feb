/* Given an array find count of leaders, an element is called as leader if that element is greater than all elements an the right of it */

//By using carry forward method

let arr = [5,7,6,1,-1,0,5,2]
let max = arr[arr.length-1]
let cnt=0

for(let i=arr.length-1;i>=0;i--)
{
    if(arr[i]>max)
    {
        max = arr[i]
        cnt++
    }
}

console.log("Count : ",cnt)