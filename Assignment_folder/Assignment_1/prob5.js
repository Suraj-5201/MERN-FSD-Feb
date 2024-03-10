// how to iterate over an array? explain with an example

//We can iterate overy an array by using for loop and .map() method

// 1. for loop

/*let arr = [10,20,30,40,50,60,70]
for(let i=0;i<arr.length-1;i++)
{
    console.log(arr[i])
}*/



// 2. .map()
let arr = [10,20,30,40,50,60,70]
arr.map(function(arr)
{
    console.log(arr)
})


/* output
  10
  20
  30
  40
  50
  60
  70
  */