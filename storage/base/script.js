class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                // if value already exists
                if (value == current.value) return undefined;
                // traverse left
                if (value < current.value) {
                    // check if left child is null
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                // traverse right
                } else {
                    // check if right child is null
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if (this.root == null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    // -> -> () ->
    // ->  ()->() ->
    // -> ()()()() ->
    BFS() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        debugger;
        let data = [];
        function traverse(node) {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node);
        }
        traverse(this.root);
        return data;
    }

}



let tree = new BinarySearchTree();
tree.insert(34);
tree.insert(4);
tree.insert(24);
tree.insert(15);
tree.insert(37);
tree.insert(50);
tree.insert(0);
tree.insert(4);
tree.insert(17);


console.log(tree.DFSPreOrder());