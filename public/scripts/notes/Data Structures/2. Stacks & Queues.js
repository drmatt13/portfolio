// replace `${i}` --> \`\${i}\`

const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
[{'comment': `Stack
last in first out
(push) <-> (pop) -> (x2) -> (x3)`}],
        //render
        {'render': false}
    ],
    
    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [{'comment': `stack from array`},
{'js': `let stack = [];`},
{'js': `\n`},
{'comment': `push, pop based`},
{'js': `stack.push(x1);`},
{'js': `stack.push(x2);`},
{'js': `stack.push(x3);`},
{'js': `stack.pop();`},
{'js': `stack.pop();`},
{'js': `stack.pop();`},
{'js': `\n`},
{'comment': `unshift, shift based`},
{'js': `stack.unshift(x1);`},
{'js': `stack.unshift(x2);`},
{'js': `stack.unshift(x3);`},
{'js': `stack.shift();`},
{'js': `stack.shift();`},
{'js': `stack.shift();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `shift and unshift reindexes every item in the array, bad in big lists`},
{'js': `class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            // unshifting value from the left
            // allows for constant time rather then parsing to get tail-1 or using a doubly linked list
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        // shift
        if (!this.first) return null;
        let temp = this.first;
        if (this.first == this.last) {
            this.last == null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push(x1);
stack.push(x2);
stack.push(x3);
stack.pop();
stack.pop();
stack.pop();`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
[{'comment': `Queue
last in first out
(push) -> (x3) -> (x2) -> (x1) -> (pop)`}],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
[{'comment': `queue from array`},
{'js': `let queue = [];`},
{'js': `\n`},
{'comment': `push, shift based`},
{'js': `queue.push(x1);`},
{'js': `queue.push(x2);`},
{'js': `queue.push(x3);`},
{'js': `queue.shift();`},
{'js': `queue.shift();`},
{'js': `queue.shift();`},
{'js': `\n`},
{'comment': `unshift, pop based`},
{'js': `stack.unshift(x1);`},
{'js': `stack.unshift(x2);`},
{'js': `stack.unshift(x3);`},
{'js': `stack.pop();`},
{'js': `stack.pop();`},
{'js': `stack.pop();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `add to the end, remove from the beginning`},
{'comment': `when using a singy linked list, removing from the end, causes you to have to parse the entire list to get n-1`},
{'js': `class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // add to the end
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // remove from the beginning
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first == this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let queue = new Queue();
queue.enqueue(x1);
queue.enqueue(x2);
queue.enqueue(x3);
queue.dequeue();
queue.dequeue();
queue.dequeue();`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': false}
    ],

];