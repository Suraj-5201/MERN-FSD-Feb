/*
Amazing Subarrays

You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.

Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 10^6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
*/
let str = "ABEC"
let str2=''
let count=0


for(let i=0;i<str.length;i++)
{
    if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
    {
        for(let j=i;j<str.length;j++)
        {
            for(let k=i;k<=j;k++)
            {
                str2 = str2 + str[k]
            }
            //console.log(str2)
            count++
            str2=''
        }
    }
}
let result = (count%10003)
console.log(result)


//OUTPUT : 6