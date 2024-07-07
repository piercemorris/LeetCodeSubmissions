function maxArea(height: number[]): number {
    let maxArea = 0
    let r = height.length - 1
    let l = 0
    
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l)
        maxArea = Math.max(area, maxArea)

        if (height[l] < height[r]) l++
        else r--

    }

    return maxArea
};