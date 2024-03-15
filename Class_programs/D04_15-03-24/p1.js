//Given N numbers where each number is occuring two times except one number, find that number

let arr = [1,2,3,4,5,4,3,2,1]
let output = 0

for(let i=0;i<arr.length;i++)
{
    output = output ^ arr[i]
}

console.log('Result',output)

/* OUTPUT
  Result 5   */