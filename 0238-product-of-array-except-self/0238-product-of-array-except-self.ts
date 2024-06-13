function productExceptSelf(nums: number[]): number[] {
    let output: number[] = Array.from(nums).fill(0)
    let left: number[] = Array.from(nums).fill(0)
    let right: number[] = Array.from(nums).fill(0)
    
    for (let i = 0; i < nums.length; i++) {
        const reverse = nums.length - i - 1

        if (i === 0) {
            left[i] = nums[i] * 1
            right[reverse] = nums[reverse] * 1
        } else {
            left[i] = nums[i] * left[i-1]
            right[reverse] = nums[reverse] * right[reverse + 1]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const len = nums.length - 1

        if (i === 0) output[i] = right[i + 1]
        else if (i === len) output[i] = left[i - 1]
        else output[i] = left[i - 1] * right[i + 1]
    }

    return output
};