function minMaxGame(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    
    let newNums = new Array(nums.length / 2)

    for (let i = 0; i < newNums.length; i++) {
        
        if (i % 2 === 0) newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
        else newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
    
    }

    return minMaxGame(newNums)
};