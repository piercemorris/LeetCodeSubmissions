function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const rowMap = {}
            const colMap = {}
            const blockMap = {}

            // check row
            const row = board[i][j]
            if (row !== '.') {
                if (rowMap[row]) return false
                else rowMap[row] = 1
            }

            // check column
            const col = board[j][i]
            if (col !== '.') {
                if (colMap[col]) return false
                else colMap[col] = 1
            }

            // check block
            const block = board[i + Math.floor(j / 3)][j % 3]
            if (block !== '.') {
                if (blockMap[block]) return false
                else blockMap[block] = 1
            }
        }
    }

    return true
};