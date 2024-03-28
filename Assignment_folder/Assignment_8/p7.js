//7. Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1

let str1 = "suraj"
let str2 = "raj"
let arr2 = str2.split('')
let arr = []
let flag=0

for (let i = 0; i < str1.length; i++)
{
    for (let j = i; j < str1.length; j++) 
    {
        for (let k = i; k <= j; k++) 
        {
            arr.push(str1[k])
        }
        if (arr.join('') == str2) {
            console.log(i)
            flag=1
        }
        arr = []
    }
}

if(flag==0)
{
    console.log(-1)
}

//Output : 2