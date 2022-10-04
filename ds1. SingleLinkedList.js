class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        // console.log(newNode);
        // When head is null -- First push 
        if (!this.head) {
            this.head = newNode;            // Add new node to the head 
            this.tail = this.head;          // Tail and head are the same at the first push 
        }
        else {
            this.tail.next = newNode;       // Add new pointer on tail
            this.tail = newNode;            // Update current tail 
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return null;
        }

        let current = this.head;
        let newTail;

        for (let i = 0; i < this.length - 1; i++) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        return current;
    }

    shift() {

        if (!this.head) return undefined;

        let currentHead = this.head.val;

        this.head = this.head.next;
        this.length--;

        if (this.length === 0) this.tail = null

        return currentHead;
    }

    unshift(val) {

        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this
    }

    get(index) {

        if (!this.head || index < 0 || index >= this.length) return null;

        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (index == i) {
                return current;
            }
            current = current.next;
        }

        return undefined;
    }

    set(index, val) {
        if (!this.head || index < 0 || index >= this.length) return false;

        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (index == i) {
                current.val = val;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    insert(index, val) {
        if (!this.head || index < 0) return false;
        if (index == 0) {
            this.unshift(val);
            return true;
        }
        if (index == this.length) {
            this.push(val);
            return true;
        }
        if (index > this.length) return false;

        let current = this.head;
        let before = this.head;

        for (let i = 0; i < index; i++) {
            if (i < index) before = current;
            current = current.next;
        }

        let newNode = new Node(val);
        newNode.next = current;
        before.next = newNode;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0) return false;
        if (index == this.length - 1) {
            this.pop();
            return true;
        }
        if (index == 0) {
            this.shift();
            return true;
        }
        if (index >= this.length) return false;

        let before = this.get(index - 1);
        let removed = before.next;

        before.next = removed.next;
        this.length--;

        return true;
    }

    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

let list = new SinglyLinkedList();

console.log(list, "\n");
list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.prettyPrint();
list.reverse();
list.prettyPrint();
