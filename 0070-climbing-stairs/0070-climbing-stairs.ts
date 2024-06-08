function climbStairs(n: number): number {

    const memo = new Map<number, number>()
    
    function dp(i) {
        if (i <= 2) return i

        if (!memo.has(i)) {
            memo.set(i, dp(i - 1) + dp(i - 2))
        }

        return memo.get(i)
    }

    return dp(n)
};