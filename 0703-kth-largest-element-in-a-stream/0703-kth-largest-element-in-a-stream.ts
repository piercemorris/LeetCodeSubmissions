class KthLargest {
    private minHeap = new MinPriorityQueue()
    private k: number

    constructor(k: number, nums: number[]) {
        this.k = k

        nums.forEach(num => this.minHeap.enqueue(num))
    }   

    add(val: number): number {
        this.minHeap.enqueue(val)

        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }

        return this.minHeap.front().element as number
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */