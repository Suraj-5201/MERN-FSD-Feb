//Stack

class stack
{
    constructor(capacity)
    {
        this.myArray = []
        this.capacity=capacity
    }

    push(element)
    {
        if(this.myArray.length<this.capacity)
        {
            this.myArray.push(element)
        }
        else{
            console.log("Stack is full\n")
        }
    }

    pop()
    {
        if(this.myArray.length!=0)
        {
            this.myArray.pop()
        }
        else{
            console.log("Stack is empty\n")
        }
    }

    display()
    {
        console.log(this.myArray)
    }
}

let arr1 = new stack(3)

arr1.push(1)
arr1.push(2)
arr1.push(3)
//arr1.display()

arr1.pop()
arr1.pop()
arr1.pop()
arr1.display()
arr1.pop()
//arr1.pop()
//arr1.display