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
{'comment': `Singly Linked Lists`},
{'comment': `head     ->       tail`},
{'comment': `x1 -> x2 -> x3 -> x4 -> null`},
{'js': `\n`},
{'js': `class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let current = this.get(index);
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index === 0 || index === this.length) {
            this.push(val);
            return true;
        }
        let current = this.get(index-1);
        if (!current) return false;
        let node = new Node(val);
        node.next = current.next;
        current.next = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) return this.shift();
        let prev = this.get(index-1);
        if (!prev.next) return false;
        let removed = prev.next;
        if (index === this.length-1) return this.pop();
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let reversedList = new SinglyLinkedList();
        let current = this.head
        while (current !== null) {
            reversedList.unshift(current.val);
            current = current.next;
        }
        return reversedList;
    }

    print() {
        let array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.val);
            current = current.next;
        }
        console.log(array);
    }
}`},
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
{'comment': `create new list`},
// {'js': `\n`},
{'js': `const list = new SinglyLinkedList();`},
{'js': `\n`},
{'comment': `push values, (x1) -> (x2) -> (x3)`},
{'js': `list.push(x1);
list.push(x2);
list.push(x3);`},

{'js': `\n`},
{'comment': `remove and return last node "tail", x1 -> x2 -> (x3)`},
{'js': `list.pop()`},

{'js': `\n`},
{'comment': `append nodes to beginning, (x6) -> (x5) -> (x4) -> x1 -> x2`},
{'js': `list.unshift(x4);
list.unshift(x5);
list.unshift(x6);`},

{'js': `\n`},
{'comment': `remove and return first node "head", (x6) -> x5 -> x4 -> x1 -> x2`},
{'js': `list.shift();`},

{'js': `\n`},
{'comment': `this.get(index) parses each node.next starting from this.head until index`},
{'comment': `returns x1,  (0)  -> (1)  -> (2)`},
{'comment': `this.get(2), (x5) -> (x4) -> (x1) -> x2`},
{'js': `list.get(2);`},

{'js': `\n`},
{'comment': `this.set(index, value) recieves the returned node from this.get(index)`},
{'comment': `then overwrites that nodes 'val' paramater`},
{'js': `list.set(3, x6);`},
{'comment': `(0) -> (1) -> (2) -> (3)`},
{'comment': ` x5 ->  x4 ->  x1 ->  x6`},

{'js': `\n`},
{'comment': `this.insert(index, value) inserts a new node at the desired index`},
{'comment': `0  -> 1  -> 2  -> (3)  -> 4`},
{'comment': `x5 -> x4 -> x1 -> (x7) -> x6`},
{'js': `list.insert(3, x7);`},

{'js': `\n`},
{'comment': `this.remove(index) removes and returns node at the desired index`},
{'comment': `0  -> (1)  -> 2  -> 3  -> 4`},
{'comment': `x5 -> (->) -> x1 -> x7 -> x6`},
{'js': `list.remove(1);`},

{'js': `\n`},
{'comment': `this.reverse() creates a new SinglyLinkedList Object`},
{'comment': `then parses this.SinglyLinkedList and unshifts each node.val into the new list Object`},
{'comment': `x5 -> x1 -> x7 -> x6`},
{'comment': `x5`},
{'comment': `x1 -> x5`},
{'comment': `x7 -> x1 -> x5`},
{'comment': `x6 -> x7 -> x1 -> x5`},
{'js': `console.log(list.reverse());`},
        ],
        // output
        [
{'output': `SinglyLinkedList {
    length = 4,
    head: { 
        val: x6,
        next: {
            val: x7,
            next: {
                val: x1,
                next: {
                    val: x5,
                    next: null
                }
            }
        }
    },
    tail: {
        val: x5,
        next: null
    }
}`}
        ],
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
{'comment': `Doubly Linked Lists`},
{'comment': `         head                 tail`},
{'comment': `null <-> x1 <-> x2 <-> x3 <-> x4 <-> null`},
{'js': `\nclass Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            // initialize
            // null <- (head / tail) -> null
            this.head = newNode;
            this.tail = newNode;
        } else {
            // null <- (head) <-> (tail) -> null
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
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        // null <- head/tail -> null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            count = this.length-1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
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
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(index-1)
        let afterNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
}`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

];