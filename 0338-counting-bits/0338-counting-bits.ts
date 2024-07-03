function countBits(n: number): number[] {
    let ans: number[] = []

    for (let i = 0; i <= n; i++) {
        ans.push(i.toString(2).split('').filter(c => c === '1').length)
    }

    return ans
};