//6. How do you reverse an array?

let arr1 = [1,2,3,4,5]
let rev_arr = []

for(let i=arr1.length-1;i>=0;i--)
{
    rev_arr.push(arr1[i])
}

console.log("Reversed array",rev_arr)

/* OUTPUT
Reversed array [ 5, 4, 3, 2, 1 ]
*/