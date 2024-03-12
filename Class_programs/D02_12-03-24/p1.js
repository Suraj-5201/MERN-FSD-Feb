/* Given an array find count of leaders, an element is called as leader if that element is greater than all elements an the right of it */

let arr = [5,7,6,1,-1,0,5,2]
let cnt=0

for(let i=0;i<arr.length-1;i++)
{
    let flag=0
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            flag=1
            break
        }
    }
    if(flag==0)
    {
        cnt++;
    }
}

console.log(cnt)

//OUTPUT : 3

