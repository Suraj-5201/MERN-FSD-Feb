/*
5) Design and implement queues with below operations with your implemented linked list 
	a) enqueue operation
	b) dequeue operation
	c) front operation
	d) tail operation
*/

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.frontNode = null
        this.rearNode = null
        this.size = 0
    }

    enqueue(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.frontNode = newNode
        } else {
            this.rearNode.next = newNode
        }
        this.rearNode = newNode
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        let removedNode = this.frontNode
        this.frontNode = this.frontNode.next
        if (!this.frontNode) {
            this.rearNode = null
        }
        removedNode.next = null
        this.size--
        return removedNode.data
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        return this.frontNode.data
    }

    tail() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
            return null
        }
        return this.rearNode.data
    }

    isEmpty() {
        return this.size === 0
    }

    display() {
        let current = this.frontNode
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()

console.log("----------")


console.log(queue.front())
console.log(queue.tail())

console.log("----------")

queue.dequeue()
queue.display()


