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
}

let c1 = new tree(4)
let c2 = new tree(5)
let c3 = new tree(6)
let c4 = new tree(2)

c1.attach_left(c1, c2)
c1.attach_right(c1, c3)
c1.attach_left(c2, c4)

console.log("Inorder")
c1.inorder(c1)

console.log("Pre-order")
c1.preOrder(c1)

console.log("Post-order")
c1.postOrder(c1)
