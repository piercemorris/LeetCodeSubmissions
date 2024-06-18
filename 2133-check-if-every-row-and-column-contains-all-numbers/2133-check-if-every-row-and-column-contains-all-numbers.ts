function checkValid(matrix: number[][]): boolean {
    const n = matrix.length
    let isValid = true

    for (let i = 0; i < matrix.length; i++) {
        let colMap = new Set()
        let rowMap = new Set()

        for (let j = 0; j < matrix.length; j++) {
            if (colMap.has(matrix[j][i]) || rowMap.has(matrix[i][j])) {
                isValid = false
                break
            }
        
            colMap.add(matrix[j][i])
            rowMap.add(matrix[i][j])
        }
    }

    return isValid
};