//Given nuber 'a' and 'i' check if the ith bit of a 'a' is set or not ?

let a = 10   //1010
let i = 4

let result = a&(1<<(i-1))

if(result==0)
{
    console.log("Not set\n")
}
else
{
    console.log("It is set")
}  

// OUTPUT
// It is set