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
        var newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            var current = this.root;
            while (true) {

                if (value === current.value) return undefined

                // Go to left
                if (value < current.value) {
                    // If null then we can asign new value
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;

        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if (!found) return false

        return current
    }

    // Breadth first search
    BFS() {
        let data = [];
        let queue = [];

        let node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    // Depth First Pre Order
    DFSPreO() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }

    // Depth First Post Order
    DFSPostO() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);

        return data;
    }

    // Depth First in Order
    DFSinOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreO());
console.log(tree.DFSPostO());
console.log(tree.DFSinOrder());