//2. Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user

const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter a first number\n',(n1)=>{
    rl.question('Enter a second number\n',(n2)=>{
        rl.question('Enter operation : +, -, *, /: ',(operation)=>{
            let result=0
            switch(operation)
            {
                case'+':
                    result = parseInt(n1) + parseInt(n2)
                    console.log("Result:",result)
                    break
                case'-':
                    result = parseInt(n1) - parseInt(n2)
                    console.log("Result:",result)
                    break
                case'*':
                    result = parseInt(n1) * parseInt(n2)
                    console.log("Result:",result)
                    break
                case'/':
                    result = parseInt(n1) / parseInt(n2)
                    console.log("Result:",result)
                    break    
                default:
                    console.log("Invalid operation\n")
                    break
            }
            rl.close();
        })
    })
});


/* OUTPUT
Enter a first number
5
Enter a second number
4
Enter operation : +, -, *, /: +
Result: 9


Enter a first number
5
Enter a second number
4
Enter operation : +, -, *, /: -
Result: 1


Enter a first number
5
Enter a second number
4
Enter operation : +, -, *, /: *
Result: 20


Enter a first number
8
Enter a second number
4
Enter operation : +, -, *, /: /
Result: 2


Enter a first number
5
Enter a second number
4
Enter operation : +, -, *, /: &
Invalid operation
*/