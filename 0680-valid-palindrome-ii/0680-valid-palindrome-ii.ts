function validPalindrome(s: string): boolean {
    let i = 0
    let j = s.length - 1

    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return checkPalindrome(s, i, j-1) || checkPalindrome(s, i+1, j)
        }

        i++
        j--
    }

    return true
};

const checkPalindrome = (s: string, i: number, j: number): boolean => {
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) return false

        i++
        j--
    }

    return true
}