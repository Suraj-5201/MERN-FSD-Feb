//4. Declare an array and print all values in an array using loops - for, while — Use functions


let arr = [9,8,7,6,5,4,3,2,1]

function printArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log('Index number:',i)
        console.log('Array element:',arr[i])
        console.log('\n')
    }
}

printArray(arr)

/* OUTPUT 

Index number: 0
Array element: 9


Index number: 1
Array element: 8


Index number: 2
Array element: 7


Index number: 3
Array element: 6


Index number: 4
Array element: 5


Index number: 5
Array element: 4


Index number: 6
Array element: 3


Index number: 7
Array element: 2


Index number: 8
Array element: 1    */

