function topKFrequent(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {}

    for (const num of nums) {
        if (freq[num] === undefined) freq[num] = 0
        freq[num] += 1
    }

    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(val => Number(val[0]))
};