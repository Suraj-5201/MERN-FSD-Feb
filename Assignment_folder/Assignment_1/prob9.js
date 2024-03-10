//9. Implement array reversal. dont use builtin function


let arr = [1,2,3,4,5,6]
let rev_arr=[]
for(let i=arr.length-1;i>=0;i--)
{
    rev_arr.push(arr[i])
}

console.log(rev_arr)

// Output : [ 6, 5, 4, 3, 2, 1 ]