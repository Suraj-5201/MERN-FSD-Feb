class queue{
    constructor(capacity)
    {
        this.myArray = []
        this.capacity=capacity
    }

    nQueue(element)
    {
        if(this.myArray.length<this.capacity)
        {
            this.myArray.push(element)
        }
        return -1
    }

    dQueue()
    {
        if(this.myArray.length!=0)
        {
            this.myArray.shift()
        }
        else{
            console.log("Queue is empty")
        }
    }

    front() {
        if (this.myArray.length !== 0) {
            return this.myArray[0];
        } else {
            console.log("Queue is empty");
            return null;
        }
    }

    tail() {
        if (this.myArray.length !== 0) {
            return this.myArray[this.myArray.length - 1];
        } else {
            console.log("Queue is empty");
            return null;
        }
    }

    display()
    {
        console.log(this.myArray)
    }
}

let arr1 = new queue(3)
arr1.nQueue(1)
arr1.nQueue(2)
arr1.nQueue(3)
arr1.display()

console.log(arr1.front())
console.log(arr1.tail())

arr1.dQueue()
arr1.display()

