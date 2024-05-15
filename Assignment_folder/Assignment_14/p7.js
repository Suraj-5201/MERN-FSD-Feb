//7) write a program to find the height of a binary tree


class tree {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    attach_left(Node1, Node2) {
        Node1.left = Node2
    }

    attach_right(Node1, Node2) {
        Node1.right = Node2
    }

    inorder(node) {
        if (node == null) {
            return;
        }

        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }

    preOrder(node){
        if (node == null) {
            return;
        }
        console.log(node.data)
        this.inorder(node.left)
        this.inorder(node.right)
    }

    postOrder(node){
        if (node == null) {
            return;
        }

        this.inorder(node.left)
        this.inorder(node.right)
        console.log(node.data)
    }

    size(node)
    {
        if(node==null)
        {
            return 0
        }

        let l = this.size(node.left)
        let r = this.size(node.right)
        return((l+r)+1)
    }

    heightOfaTree(node)
    {
        if(node==null)
        {
            return -1
        }

        let l = this.heightOfaTree(node.left)
        let r = this.heightOfaTree(node.right)
        return Math.max(l,r)+1
    }

}

let c1 = new tree(4)
let c2 = new tree(5)
let c3 = new tree(6)
let c4 = new tree(2)
let c5 = new tree(1)

c1.attach_left(c1, c2)
c1.attach_right(c1, c3)
c1.attach_left(c2, c4)
c4.attach_left(c4,c5)

console.log(c1.heightOfaTree(c1)) //OUTPUT : 3