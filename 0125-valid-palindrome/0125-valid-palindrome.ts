function isPalindrome(s: string): boolean {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (str === str.split('').reverse().join('')) return true

    return false
};