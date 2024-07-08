function kClosest(points: number[][], k: number): number[][] {
    
    const q = new MinPriorityQueue()
    const res: number[][] = []

    points.forEach(point => q.enqueue(point, Math.sqrt(point[0] ** 2 + point[1] ** 2)))

    for (let i = 0; i < k; i++) {
        res.push(q.dequeue().element as number[])
    }

    return res
};