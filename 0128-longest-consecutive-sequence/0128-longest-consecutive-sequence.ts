function longestConsecutive(nums: number[]): number {
    
    let set: Set<number> = new Set(nums)
    let longestStreak: number = 0

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num
            let currentStreak = 1

            while (set.has(currentNum + 1)) {
                currentNum += 1
                currentStreak += 1
            }

            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }

    return longestStreak
};