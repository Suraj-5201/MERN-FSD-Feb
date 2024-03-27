//4. How do you calculate the number of vowels and consonants in a String?

let str = "Assignments"
let s1= str.toLowerCase().split('')
let count1 =0
let count2 =0

for(let i=0;i<s1.length;i++)
{
    if(s1[i]=='a' || s1[i]=='e' || s1[i]=='i' || s1[i]=='o' || s1[i]=='u')
    {
        count1++
    }
    else{
        count2++
    }
}

console.log("Number of vowels : ",count1)
console.log("Number of consonants : ",count2)

/* OUTPUT
Number of vowels :  3
Number of consonants :  8
*/