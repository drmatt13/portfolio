class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex];
            if (element <= parentElement) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }
}

let heap = new MaxBinaryHeap();

console.log(Date.now());