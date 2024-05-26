function containsDuplicate(nums: number[]): boolean {
    const seenMap = new Map<string, number>()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i].toString()

        if (seenMap.has(num)) return true

        seenMap.set(num, 1)
    }

    return false
};