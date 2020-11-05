class Node {
    constructor(val) {
        this.val = val;
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
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first == this.last) {
            this.last == null;
        }
        this.first = this.first.next;
        this.size--;
        if (this.first) return [temp.val, this.first.val];
        return [temp.val, null];
    }
    update(val) {
        if (!this.first) this.push(val);
        else this.first.val = `${val}` + this.first.val;
        return this;
    }
}

const specialChars = {"\n": true, "-": true, "+": true, "=": true, "'": true,';': true,'/': true,'?': true,'<': true,'>': true,',': true,'.': true,'[': true,']': true,'{': true,'}': true,'(': true,')': true,'*': true,'&': true,'^': true,'%': true,'$': true,'#': true,'@': true,'!': true,'|': true,'~': true,'`': true,' ': true,'\\': true};

let cache = new Stack();
'//kjkj'
const updateCache = (s) => {
    let char;
    let newString = false;
    for (let i=s.length-1; i>=0; i--) {
        char = s.pop();
        if (specialChars[char]) {
            cache.push(char);
            newString = true;
        } else {
            if (newString) {
                cache.push(char);
                newString = false;
            }
            else cache.update(char);
        }
    }
}

// 'test555, 555test'


updateCache(Array.from("1234$5.ij    iji;;;ijij()kj"));
