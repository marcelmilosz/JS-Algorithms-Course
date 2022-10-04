class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prettyPrint() {

        let current = this.head;
        let value;

        for (let i = 0; i < this.length; i++) {
            value = current.val;

            if (i === 0) console.log(`\nHEAD ->\t${i} : ${value}`)
            else if (i < this.length - 1) console.log(`\t\t\t\t${i} : ${value}`)
            else console.log(`TAIL ->\t${i} : ${value}`)

            current = current.next;
        }
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head || this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;
    }

    unshift(val) {
        if (this.length === 0) return this.push(val);

        let newNode = new Node(val);

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;

    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current;
        let count;

        if (index <= (this.length / 2)) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        }
        else {
            current = this.tail;
            count = this.length - 1;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        prevNode.prev = newNode;

        this.length++;

        return newNode;

    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode;
    }

    reverse() {
        if (this.head === null) {
            return null;
        }

        let currentNode = this.head;
        this.tail = currentNode;

        while (currentNode !== null) {
            let prev = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = prev;

            if (currentNode.prev) {
                currentNode = currentNode.prev;
            } else {
                this.head = currentNode;
                break;
            }
        }

        return this;
    }
}

let list = new DoubleLinkedList();

// list.push(4);
// list.push(8);
// list.insert(0, 123123)

// list.prettyPrint();
// list.reverse()

// list.prettyPrint();


