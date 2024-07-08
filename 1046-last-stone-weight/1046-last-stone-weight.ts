function lastStoneWeight(stones: number[]): number {
    const q = new MaxPriorityQueue()

    stones.forEach(s => q.enqueue(s))

    while (q.size() > 1) {
        const stone = q.dequeue().element as number
        const stone2 = q.dequeue().element as number

        const remainingWeight = Math.abs(stone - stone2)
        if (remainingWeight !== 0) q.enqueue(remainingWeight)
    }

    return q.size() ? q.dequeue().element as number : 0
};