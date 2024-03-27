//1. Determine if a string/number is a palindrome?

let str = "123"
let s1 = str.toLowerCase()
let s2=''

for(let i=s1.length-1;i>=0;i--)
{
    s2 = s2 + s1[i]
}

if(s1==s2)
{
    console.log("True")
}
else{
    console.log("False")
}


/* OUTPUT
For input Mom : True
For input Suraj : False
For input 121 : True
For  input 123 : False

*/