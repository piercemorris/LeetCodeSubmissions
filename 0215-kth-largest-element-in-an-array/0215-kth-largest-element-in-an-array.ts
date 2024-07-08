function findKthLargest(nums: number[], k: number): number {
    
    const q = new MaxPriorityQueue()

    nums.forEach(num => q.enqueue(num))

    for (let i = 0; i < k-1; i++) {
        q.dequeue()
    }

    return q.dequeue().element as number
};