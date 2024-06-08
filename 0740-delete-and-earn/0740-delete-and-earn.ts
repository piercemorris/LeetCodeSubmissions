function deleteAndEarn(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    const points = new Array(Math.max(...nums) + 1).fill(0);
    const cache = new Map<number, number>()
    let maxNumber = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        points[num] += num
    
        maxNumber = Math.max(maxNumber, num)
    }

    function maxPoints(num): number {
        if (num === 0) return 0
        if (num === 1) return points[1]
        
        if (!cache.has(num)) {
            cache.set(num, Math.max(maxPoints(num - 1), maxPoints(num - 2) + points[num]))
        }

        return cache.get(num)
    }
    
    return maxPoints(maxNumber)
};