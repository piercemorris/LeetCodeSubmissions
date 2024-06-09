function longestPalindrome(s: string): number {
    const map = new Map<string, number>()
    let hasOddFrequency = false
    let count = 0

    if (s.length === 1) return 1

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (!map.has(char)) map.set(char, 1)
        else map.set(char, map.get(char) + 1)
    }

    for (const value of map.values()) {
        if (value % 2 === 0) count += value
        else {
            count += value - 1
            hasOddFrequency = true
        }
    }

    return hasOddFrequency ? count + 1 : count
};