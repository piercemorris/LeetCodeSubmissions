function rob(nums: number[]): number {
    const dp = new Array(nums.length).fill(-1)

    const robber = (i) => {
        if(i >= nums.length) return 0
        if(dp[i] !== -1) return dp[i]
    
        return dp[i] = Math.max(nums[i] + robber(i+2), robber(i+1))
    }

    return robber(0)
}