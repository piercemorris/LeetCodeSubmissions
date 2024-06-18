function countGoodRectangles(rectangles: number[][]): number {
    const values: number[] = []
    let highest = 0

    for (let i = 0; i < rectangles.length; i++) {
        const min = Math.min(rectangles[i][0], rectangles[i][1])

        if (min > highest) highest = min

        values.push(min)
    }
    console.log(values, highest)
    console.log(values.filter(val => val === highest))

    return values.filter(val => val === highest).length
};