function largestLocal(grid: number[][]): number[][] {
    const index = grid.length - 2
    const genMatrix = []
    let maxLocal = 0

    for (let i = 0; i < index; i++) {
        genMatrix.push([])

        for  (let j = 0; j < index; j++) {
            for (let x = 0; x < 9; x++) {
                const xIndex = i+(x%3)
                const yIndex = Math.floor(j+(x/3))

                if (grid[xIndex][yIndex] > maxLocal) maxLocal = grid[xIndex][yIndex]
            }

            genMatrix[i].push(maxLocal)
            maxLocal = 0
        }
    }

    return genMatrix
};