function minOperations(nums: number[]): number {
    let counts = {} as { string: number }
    let minOps = 0

    for (let i = 0; i < nums.length; i++) {
        let currVal = counts[nums[i]]
        currVal === undefined ? counts[nums[i]] = 1 : counts[nums[i]] = currVal+1
    }

    (Object.values(counts) as number[]).forEach(val => {
        if (val === 1) minOps = -1

        if (minOps !== -1) {
            if (val % 3 === 0) minOps += val/3
            if (val % 3 === 2) minOps += Math.ceil(val/3)
            if (val % 3 === 1) {
                for (let j = 1; j < 4; j++) {
                    if ((val - (2*j)) % 3 === 0) {
                        minOps += j + ((val - (2*j))/3)
                    }
                }
            }
        }
    })

    console.log(Object.values(counts), minOps)

    return minOps
};