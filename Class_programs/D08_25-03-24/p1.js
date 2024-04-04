class Node {
    constructor(name, phone_num) {
        this.name = name;
        this.phone_num = phone_num;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(new_node) {
        if (this.head == null)
        {
            this.head = new_node;
        } else 
        {
            let temp = this.head;
            while (temp.next !=null) {
                temp = temp.next;
            }
            temp.next = new_node;
        }
    }

    removeLast() {
        if (this.head == null) {
            return;
        }
        let temp = this.head;
        let prev = null;
        if (temp.next == null) {
            this.head = null;
            return;
        }
        while (temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }
    

    addFirst(Node)
    {
        if(Node.next==null)
        {
            Node.next=this.head
        }
    }

    removeFirst()
    {
        this.head.next=null
    }

    check_phno(number)
    {
        let temp = this.head
        while(temp!=null)
        {
            if(temp.phone_num==number)
            {
                console.log(temp.name,temp.phone_num)
            }
            temp = temp.next
        }
    }
}

let list = new LinkedList()
let c1 = new Node("Suraj", 9481183572)
let c2 = new Node("Sulochana", 9480413475)
let c3 = new Node("Suma",9481276569)
let c4 = new Node("Suman",9445566778)

list.append(c1)
list.append(c2)
list.append(c3)

list.check_phno(9480413475)
