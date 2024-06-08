function rob(nums: number[]): number {

    const memo = new Map<number, number>()

    function dp(i): number {
        if (i === 0) return nums[0]
        if (i === 1) return Math.max(nums[0], nums[1])

        if (!memo.has(i)) {
            memo.set(i, Math.max(dp(i-1), dp(i-2) + nums[i]))
        }

        return memo.get(i)
    }

    return dp(nums.length - 1)
    
};