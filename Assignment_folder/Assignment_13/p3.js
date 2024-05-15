/*
3) Design and implement stack with below operations with your implemented linked list 
	a) push operation
	b) pop operation
	c) top operation
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.topNode = null;
        this.size = 0;
    }

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.topNode;
        this.topNode = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        let poppedNode = this.topNode;
        this.topNode = this.topNode.next;
        poppedNode.next = null;
        this.size--;
        return poppedNode.data;
    }

    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.topNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.topNode;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log("----------")

stack.pop()
stack.print()
console.log("----------")

console.log(stack.top())

