function maximumScore(a: number, b: number, c: number): number {
    let score = 0

    const stonePiles = [a, b, c].sort((a, b) => b - a)

    while (stonePiles[0] > 0 && stonePiles[1] > 0) {
        score += 1
        stonePiles[0] -= 1
        stonePiles[1] -= 1
        stonePiles.sort((a, b) => b - a)
    }

    return score
};