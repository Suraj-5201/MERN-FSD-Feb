class Node{
    constructor(name)
    {
        this.name=name
        this.next=null
    }
}

class LinkedList{
    constructor()
    {
        this.head = null
    }

    append(new_node)
    {
        if(this.head==null)
        {
            this.head = new_node
        }
        else{
            let temp = this.head
            while(temp.next!=null)
            {
                temp = temp.next
            }
            temp.next= new_node
        }
    }

    display()
    {
        let temp = this.head
        while(temp!=null)
        {
            console.log(temp.name)
            temp = temp.next
        }
    }

    
}

let list = new LinkedList()
let c1 = new Node("suraj")
let c2 = new Node("sangamnesh")
let c3 = new Node("Rakshitha")

list.append(c1)
list.append(c2)
list.append(c3)

list.display()