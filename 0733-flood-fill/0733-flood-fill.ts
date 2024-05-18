function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const ROWS = image.length
    const COLS = image[0].length
    const startColor = image[sr][sc]

    if (startColor === color) return image

    function walk(x: number, y: number) {
        if (x < 0 || x >= ROWS || y < 0 || y >= COLS) return
        
        if (image[x][y] === startColor) {
            image[x][y] = color

            walk(x + 1, y)
            walk(x - 1, y)
            walk(x, y + 1)
            walk(x, y - 1)
        }
    }

    walk(sr, sc)

    return image
};