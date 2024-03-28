//5. How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let arr = [1,2,2,3,3,4,4,4,5]
count={}

for(let i=0;i<arr.length;i++)
{
    let flag=0
    let num = arr[i]
    for(let key in count)
    {
        if(key==num)
        {
            count[key]++
            flag=1
            break
        }
    }
    if(flag==0)
    {
        count[num]=1
    }
}

for(let num in count)
{
    console.log(`element ${num} :frequency ${count[num]}`)
}

/* OUTPUT

element 1 :frequency 1
element 2 :frequency 2
element 3 :frequency 2
element 4 :frequency 3
element 5 :frequency 1

*/