function maxArea(height: number[]): number {
    let maxArea = 0
    let r = height.length - 1
    let l = 0
    
    while (l < r) {
        maxArea = Math.max(Math.min(height[l], height[r]) * (r - l), maxArea)
        if (height[l] < height[r]) { l++ } else r--
    }

    return maxArea
};