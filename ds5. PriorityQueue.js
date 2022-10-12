class ProrityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        // Push new value to top if is bigger than parent
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element.priority <= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        const max = this.values[0]; // for biggest value
        const end = this.values.pop(); // end value (smallest)

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let index = 0;
        const len = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < len) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < len) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let pq = new ProrityQueue();
pq.enqueue("e", 1);
pq.enqueue("a", 5);
pq.enqueue("d", 2);
console.log(pq.dequeue());
console.log(pq.dequeue());
