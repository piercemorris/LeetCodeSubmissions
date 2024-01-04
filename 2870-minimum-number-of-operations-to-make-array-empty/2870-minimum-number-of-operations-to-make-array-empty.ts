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
            if (val % 3 === 0) {
                minOps += val/3
            } else {
                minOps += Math.floor(val / 3) + 1
            } 
        }
    })

    console.log(Object.values(counts), minOps)

    return minOps
};