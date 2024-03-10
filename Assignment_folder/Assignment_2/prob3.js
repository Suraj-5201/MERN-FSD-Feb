const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter a first number\n',(n1)=>{
    rl.question('Enter a second number\n',(n2)=>{
        rl.question('Enter a operation +, -, *, /\n',(operation)=>
        {
            switch(operation)
            {
                case'+':
                    add(parseInt(n1),parseInt(n2))
                    break
                case'-':
                    sub(parseInt(n1),parseInt(n2))
                    break
                case'*':
                    mul(parseInt(n1),parseInt(n2))
                    break
                case'/':
                    div(parseInt(n1),parseInt(n2))
                    break
                default:
                    console.log("Invalid Operation")
            }
            rl.close();
        })
    })
})

function add(n1,n2)
{
    let result = n1 + n2
    console.log('Result: ',result)
}

function sub(n1,n2)
{
    let result = n1 - n2
    console.log('Result: ',result)
}

function mul(n1,n2)
{
    let result = n1 * n2
    console.log('Result: ',result)
}

function div(n1,n2)
{
    let result = n1 / n2
    console.log('Result: ',result)
}


/* OUTPUT

Enter a first number
5
Enter a second number
7
Enter a operation +, -, *, /
+
Result:  12 


Enter a first number
5
Enter a second number
3
Enter a operation +, -, *, /
-
Result:  2


Enter a first number
5
Enter a second number
5
Enter a operation +, -, *, /
*
Result:  25


Enter a first number
5
Enter a second number
2
Enter a operation +, -, *, /
/
Result:  2.5


Enter a first number
7
Enter a second number
6
Enter a operation +, -, *, /
&
Invalid Operation

*/


