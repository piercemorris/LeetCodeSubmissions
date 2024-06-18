function areAlmostEqual(s1: string, s2: string): boolean {
    let count = 0

    if (s1 === s2) return true

    if (s1.split('').sort().join() !== s2.split('').sort().join()) return false

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++
        if (count > 2) return false
    }

    return true
};