/*
implement basic stack operations such as push, pop, peek, and is_empty using an array-based approach in JS
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Pointer to the next node
    }
}

class Stack {
    constructor() {
        this.head = null; // Start with an empty list
        this.size = 0; // Track the size of the stack
    }

    push(new_node)
    {
        if(this.head==null)
        {
            this.head=new_node
        }
        else{
            new_node.next=this.head
            this.head = new_node;
        }
        this.size++
    }

    pop() {
        if (!this.head) { 
            return null; 
        }
        const value = this.head.value; 
        this.head = this.head.next; 
        this.size--; 
        return value; 
    }

    isEmpty() {
        return this.size === 0;
    }

    printstack()
    {
    let node=this.head
    let string=""
    while(node)
    {
        string+=node.value+","
        node=node.next
    }

    return string 

    
    }   
}


let list = new Stack()
let c1 = new Node(1)
let c2 = new Node(2)
let c3 = new Node(3)

list.push(c1)
list.push(c2)
list.push(c3)

console.log(list.printstack())