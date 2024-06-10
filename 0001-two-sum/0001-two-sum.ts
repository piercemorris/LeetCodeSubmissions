function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (map.has(num)) {
            return [map.get(num), i]
        } else {
            map.set(target - num, i)
        }

    }
};