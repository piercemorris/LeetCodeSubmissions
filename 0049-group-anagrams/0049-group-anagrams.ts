function groupAnagrams(strs: string[]): string[][] {
    const map = {}
    
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i].split('').sort().join('')

        if (map[word]) {
            map[word].push(strs[i])
        } else {
            map[word] = [strs[i]]
        }
    }

    return Object.values(map).map(value => value) as string[][]
};